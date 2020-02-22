var model = new Model();

$(document).ready(function () {
    ko.applyBindings(model);
});

function initMap() {}

function Model() {
    var self = this;

    this.isGrpuped = ko.observable("0");

    this.getSavedData = function () {
        $.get("get.php", function (data) {
            self.savedData(data);
        });
    }
    this.getFilters = function () {
        $.get("getFilters.php", function (data) {
            self.filterData(data);
        });
    }

    this.showLocation = function () {
        GetLocation(function (data) {
            alert(data.lng, data.lat);
        })
    }

    this.filterData = ko.observable();
    this.info = {
        currentLat: -34.0455073,
        currentLong: 18.7636314,
        removeHtmlRegex: new RegExp('<[^>]*>', 'gi'),
        insideTagRegex: new RegExp('<(.*?)>(.*?)<\/(.*?)>', 'gi')
    };

    this.filter = {
        Text: ko.observable(),
        Province: ko.observable(),
        Phase: ko.observable(),
        Sector: ko.observable(),
        Allocation: ko.observable(),
        District: ko.observable(),
        DMunName: ko.observable(),
        LMunName: ko.observable(),
        Region: ko.observable(),
        Suburb: ko.observable(),
        TownCity: ko.observable(),
        NoFeeSchool: ko.observable(),
        UrbanRural: ko.observable()
    };

    this.data = ko.observableArray([]);
    this.savedData = ko.observableArray([]);

    this.clear = function () {
        self.filter.Text(null);
        self.filter.Sector(null);
        self.filter.Phase(null);
        self.filter.Province(null);
        self.filter.Allocation(null);
        self.filter.District(null);
        self.filter.DMunName(null);
        self.filter.LMunName(null);
        self.filter.Region(null);
        self.filter.Suburb(null);
        self.filter.TownCity(null);
        self.filter.UrbanRural(null);
        self.filter.NoFeeSchool(null);
    };

    this.statusChanged = function (item, event) {
        updateStatus(item.Id, event.target.value);
    }

    this.filterReults = function (data) {
        var results = _.clone(data);
        var filterText = self.filter.Text();

        if (filterText) {
            filterText = filterText.toUpperCase();
            results = _.filter(results, function (item) {
                return _.includes((item.SchoolName || "").toUpperCase(), filterText);
            });
        }

        results = filterOnExactMatch("Sector", self.filter.Sector());
        results = filterOnExactMatch("Phase", self.filter.Phase());
        results = filterOnExactMatch("Province", self.filter.Province());
        results = filterOnExactMatch("Allocation", self.filter.Allocation());
        results = filterOnExactMatch("District", self.filter.District());
        results = filterOnExactMatch("DMunName", self.filter.DMunName());
        results = filterOnExactMatch("LMunName", self.filter.LMunName());
        results = filterOnExactMatch("Region", self.filter.Region());
        results = filterOnExactMatch("Suburb", self.filter.Suburb());
        results = filterOnExactMatch("Town_City", self.filter.TownCity());
        results = filterOnExactMatch("Urban_Rural", self.filter.UrbanRural());
        results = filterOnExactMatch("NoFeeSchool", self.filter.NoFeeSchool());

        function filterOnExactMatch(property, text) {
            return !text ? results : _.filter(results, function (item) {
                return item[property] == text;
            });
        }

        return results;
    };

    this.showMax = function (data, max) {
        max = max ? max : 1000;
        var cloned = _.clone(data);
        return cloned.length >= max ? cloned.splice(0, max) : cloned;
    }

    this.getEastOrWest = function (school) {
        return school.Long > self.info.currentLong ? "East" : "West";
    };


    this.isEast = function (school) {
        return school.Long > self.info.currentLong;
    };

    this.googleFor = function (school) {
        window.open("https://www.google.co.za/search?q=" + school.Name);
    };

    this.showDir = function (school) {
        window.open("https://www.google.co.za/maps/dir/" + "-34.0455073,18.7636314" + "/" + school.Lat + "," + school.Long);
    };

    this.showMap = function (school) {
        window.open("https://www.google.co.za/maps/@" + school.Lat + "," + school.Long + ",19z");
    };

    this.highlight = function (itemText) {
        return highlightMatch(self.filter.Text(), itemText);
    };

    this.getStatusTheme = function (school) {
        var savedData = self.savedData();
        var entry = _.find(savedData, function (item) {
            return item.Id == school.Id
        });
        if (!entry) {
            return "";
        }
        switch (entry.Status) {
            case self.info.status.emailed:
                {
                    return "info";
                }
            case self.info.status.maybe:
                {
                    return "warning";
                }
            case self.info.status.accepted:
                {
                    return "success";
                }
            case self.info.status.declined:
                {
                    return "danger";
                }
            default:
                {
                    return "";
                }
        }
    }

    this.showStatus = function (school) {
        var savedData = self.savedData();
        var entry = _.find(savedData, function (item) {
            return item.Id == school.Id
        });
        return !entry ? "n/a" : statusText(entry.Status);

        function statusText(status) {
            switch (status) {
                case "":
                case self.info.status.notContacted:
                    {
                        return "not contacted";
                    }
                case self.info.status.emailed:
                    {
                        return "emailed";
                    }
                case self.info.status.maybe:
                    {
                        return "maybe";
                    }
                case self.info.status.accepted:
                    {
                        return "accepted";
                    }
                case self.info.status.declined:
                    {
                        return "declined";
                    }
                default:
                    {
                        return "n/a";
                    }

            }
        }
    };

    this.updateToEmailed = function (item) {
        updateStatus(item.Id, self.info.status.emailed);
    }
    this.updateToAccepted = function (item) {
        updateStatus(item.Id, self.info.status.accepted);
    }
    this.updateToDeclined = function (item) {
        updateStatus(item.Id, self.info.status.declined);
    }
    this.updateToMaybe = function (item) {
        updateStatus(item.Id, self.info.status.maybe);
    }
    this.updateToNone = function (item) {
        updateStatus(item.Id, null);
    }

    this.getItemValue = function (school) {
        var savedData = self.savedData();
        var entry = _.find(savedData, function (item) {
            return item.Id == school.Id
        });
        return !entry ? "" : statusValue(entry.Status);

        function statusValue(status) {
            switch (status) {
                case "":
                case self.info.status.notContacted:
                    {
                        return "not contacted";
                    }
                case self.info.status.emailed:
                    {
                        return "emailed";
                    }
                case self.info.status.maybe:
                    {
                        return "maybe";
                    }
                case self.info.status.accepted:
                    {
                        return "accepted";
                    }
                case self.info.status.declined:
                    {
                        return "declined";
                    }
                default:
                    {
                        return "";
                    }
            }
        }

    }

    function updateStatus(id, status) {
        var savedData = self.savedData();
        var entry = _.find(savedData, function (item) {
            return item.Id == id
        });
        entry ? (entry.Status = status) : null;
        self.savedData.valueHasMutated();
        $.post("update.php", ko.toJSON({
            Id: id,
            Status: status ? status : null
        }), function () {

            //self.getSavedData();
        });
    }

    function highlightMatch(filterText, text) {
        filterText = filterText ? escapeRegExp(filterText) : "";

        if (!filterText || !text) {
            return text;
        }

        return text.replace(new RegExp('(' + filterText + ')', 'gi'), '<span class="search-higlight">$1</span>');
    };

    function escapeRegExp(str) {
        return str ? str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") : '';
    };

    function init() {
        self.getSavedData();
        self.getFilters();
    };

    init();



    this.showResultsOnMap = function () {
        //var locations = prepListForMaps(self.showMax(self.filterReults(self.savedData())), 200);
        var locations = prepListForMaps(self.filterReults(self.savedData()));
        console.log(locations);
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 5,
            center: new google.maps.LatLng(-30.7607921, 24.1153118),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        var infowindow = new google.maps.InfoWindow();
        var useCluster = self.isGrpuped() == "1";

        locations = _.filter(locations, function (l) {
            return l.long && l.lat;
        });

        var markers = _.map(locations, function (l) {
            return placeMarker(map, l, infowindow, useCluster);
        });

        if (useCluster) {
            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }

    }

    function placeMarker(map, location, infowindow, useCluster) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(location.lat, location.long),
            map: !useCluster ? map : null
        });

        google.maps.event.addListener(marker, 'click', function (event, i) {
            infowindow.setContent(getMapContent(location.school));
            infowindow.open(map, marker);
            console.log(location);
        });

        return marker;

        function getMapContent(school) {
            return "<div><b>{SchoolName}</b></div>\
            <div><a href='mailto:{Email}'>{Email}</a></div>\
            <div>Urban/Rural: <b>{Urban_Rural}</b></div>\
            <div>NoFeeSchool: <b>{NoFeeSchool}</b></div>".format(school);
        }
    }

    function prepListForMaps(list) {
        return _.map(list, function (entry) {
            return {
                name: entry.SchoolName,
                lat: parseFloat(entry.Latitude),
                long: parseFloat(entry.Longitude),
                school: entry
            }
        });
    }

}

String.prototype.format = function (n) {
    var t = this,
        r, u, f, i;
    if (n && typeof n == "object") {
        r = n;
        for (u in r)
            f = new RegExp("{" + u + "}", "gm"),
            t = t.replace(f, r[u])
    } else if (i = arguments.length,
        t)
        while (i--)
            t = t.replace(new RegExp("\\{" + i + "\\}", "gm"), arguments[i]);
    return t
}

/*
Allocation
Cell
DMunName

Email
LMunName
Latitude
Longitude
NoFeeSchool
Phase

Province

SchoolName
Sector
Suburb
Tel
Town_City
Urban_Rural
*/


	

