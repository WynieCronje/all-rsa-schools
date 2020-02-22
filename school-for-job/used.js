var schools = [
    { "Id": 0, "Name": "HEBRON CHRISTENSKOOL", "Email": "admin@hebronchristenskool.co.za", "Long": 18.668629, "Lat": -33.880724, "Cell": "0722658410", "Tel": "0219394145", "FlyDistance": 20, "Suburb": "BELLVILLE", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Hebron Straat 3", "Sector": "INDEPENDENT", "Phase": "PRIMARY SCHOOL", "Kids": null },
    { "Id": 1, "Name": "BELLVILLE-SUID PRIM.", "Email": "admin@bvsp.wcape.school.za", "Long": 18.640571, "Lat": -33.919506, "Cell": "0832890200", "Tel": "0215583126", "FlyDistance": 18, "Suburb": "BELLVILLE SOUTH", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "82 Industriestaat 82", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 1116 },
    { "Id": 2, "Name": "GOEIE HOOP PRIM.", "Email": "head@ghps.wcape.school.za", "Long": 18.637009, "Lat": -33.913147, "Cell": "0826561008", "Tel": "0216949933", "FlyDistance": 19, "Suburb": "BELLVILLE SOUTH", "Town_City": "BELLVILLE SOUTH", "StreetAddress": "Goeiehoop Street", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 559 },
    { "Id": 3, "Name": "LIGHTHOUSE CENTRE OF LEARNING", "Email": "head@shilohcentre.co.za", "Long": 18.634273, "Lat": -33.916274, "Cell": "0738413347", "Tel": "0219512576", "FlyDistance": 19, "Suburb": "BELLVILLE SOUTH", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "91 Modderdam Road", "Sector": "INDEPENDENT", "Phase": "COMBINED SCHOOL", "Kids": null },
    { "Id": 4, "Name": "WINSLEY PRIM.", "Email": "admin@winsleyps.wcape.school.za", "Long": 18.649956, "Lat": -33.918445, "Cell": "0834123256", "Tel": "0219314470", "FlyDistance": 18, "Suburb": "BELLVILLE SOUTH", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "William Taylorlaan 39", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 716 },
    { "Id": 5, "Name": "HIGHBURY PRIMARY SCHOOL", "Email": "highbury.primaryschool@gmail.com", "Long": 18.680706, "Lat": -33.947859, "Cell": "0834960103", "Tel": "0215583126", "FlyDistance": 13, "Suburb": "BELLVILLE TEACHERS COLLEGE", "Town_City": "Kuils River", "StreetAddress": "C/o Belhar & Nooiensfontein Rd", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 559 },
    { "Id": 6, "Name": "VERGEZICHT PRIVATE SCHOOL", "Email": "admin@vergezicht.co.za", "Long": 18.854402, "Lat": -34.078519, "Cell": "0835740626", "Tel": "0287222530", "FlyDistance": 9, "Suburb": "BENE TOWNSHIP", "Town_City": "SOMERSET WEST", "StreetAddress": "Prospect House", "Sector": "INDEPENDENT", "Phase": "PRIMARY SCHOOL", "Kids": null },
    { "Id": 7, "Name": "BOSTON PRIM.", "Email": "office@boston.wcape.school.za", "Long": 18.617513, "Lat": -33.890593, "Cell": "0827497821", "Tel": "0219886884", "FlyDistance": 22, "Suburb": "BOSTON", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Lincoln Street", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 8, "Name": "TOTIUS PRIM.", "Email": "admin@totius.co.za", "Long": 18.624505, "Lat": -33.894805, "Cell": "0837726419", "Tel": "0219884825", "FlyDistance": 21, "Suburb": "BOSTON", "Town_City": "BELLVILLE", "StreetAddress": "Bostonstraat", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 9, "Name": "VREDELUST PRIM.", "Email": "admin@vredelust.wcape.school.za", "Long": 18.613467, "Lat": -33.897683, "Cell": "0790512412", "Tel": "0219521140", "FlyDistance": 21, "Suburb": "BOSTON", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Sixth Avenue", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 10, "Name": "DESTINATUS PRIVAATSKOOL", "Email": "hoof@destinatus.co.za", "Long": 18.703926, "Lat": -33.901484, "Cell": "0847090025", "Tel": "0216973282", "FlyDistance": 17, "Suburb": "BRACKENFELL SOUTH", "Town_City": "BRACKENFELL", "StreetAddress": "H/V Angelier En De Vijgen Str", "Sector": "INDEPENDENT", "Phase": "PRIMARY SCHOOL", "Kids": null },
    { "Id": 11, "Name": "CURRO BRACKENFELL", "Email": "info.brackenfell@curro.co.za", "Long": 18.687618, "Lat": -33.899718, "Cell": "0846285413", "Tel": "0219756377", "FlyDistance": 18, "Suburb": "BURGUNDY", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": ".", "Sector": "INDEPENDENT", "Phase": "PRIMARY SCHOOL", "Kids": null },
    { "Id": 12, "Name": "ABEILE RUCHE SCHOOL (CENTURY CITY)", "Email": "office@abeilleruche.co.za", "Long": 18.512954, "Lat": -33.888361, "Cell": "0833579473", "Tel": "0218641792", "FlyDistance": 29, "Suburb": "CENTURY CITY", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Intake Island", "Sector": "INDEPENDENT", "Phase": "PRIMARY SCHOOL", "Kids": null },
    { "Id": 13, "Name": "CURRO CENTURY CITY PRIVATE SCHOOL", "Email": "paula.o@curro.co.za", "Long": 18.520931, "Lat": -33.883456, "Cell": "0726200301", "Tel": "0218371058", "FlyDistance": 29, "Suburb": "CENTURY CITY", "Town_City": "CAPE TOWN", "StreetAddress": "Socrates Way", "Sector": "INDEPENDENT", "Phase": "COMBINED SCHOOL", "Kids": null },
    { "Id": 14, "Name": "EURECON PRIM.", "Email": "eureconps@mweb.co.za", "Long": 18.591551, "Lat": -33.93068, "Cell": "0724003898", "Tel": "0219062772", "FlyDistance": 20, "Suburb": "CONNAUGHT", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Connaughtweg", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 1116 },
    { "Id": 15, "Name": "DURBANVILLE PRIM.", "Email": "office@durbieland.com", "Long": 18.647986, "Lat": -33.835943, "Cell": "0823375276", "Tel": "0219521170", "FlyDistance": 26, "Suburb": "DURBANVILLE", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Weyerslaan", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 16, "Name": "DURBANVILLE VOORB.", "Email": "admin@dvprep.co.za", "Long": 18.65382, "Lat": -33.838629, "Cell": "0727326262", "Tel": "0219311911", "FlyDistance": 25, "Suburb": "DURBANVILLE", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Luckhoffstraat", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 17, "Name": "GENE LOUW PRIM.", "Email": "acvdw@genelouw.co.za", "Long": 18.658725, "Lat": -33.85412, "Cell": "0793147842", "Tel": "0217978448", "FlyDistance": 23, "Suburb": "DURBANVILLE", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Tulipstraat", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 18, "Name": "TREVOR MANUEL PRIM.", "Email": "tman.ps@gmail.com", "Long": 18.718774, "Lat": -33.78204, "Cell": "0733810061", "Tel": "0817325081", "FlyDistance": 30, "Suburb": "DURBANVILLE", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "1154 Sierra Street", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 1116 },
    { "Id": 19, "Name": "EVERSDAL PRIM.", "Email": "info@eversdal.org.za", "Long": 18.651786, "Lat": -33.861796, "Cell": "0838606482", "Tel": "0219522150", "FlyDistance": 23, "Suburb": "EVERSDAL - BELLVILLE", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Stepping Stones", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 20, "Name": "DE TYGER PRIM.", "Email": "lsdetyger@telkomsa.net", "Long": 18.596045, "Lat": -33.896248, "Cell": "0833113425", "Tel": "0219525820", "FlyDistance": 23, "Suburb": "FAIRFIELD ESTATE", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Glenboigstraat-Noord", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 21, "Name": "FISH HOEK PRIM.", "Email": "reception@fishhoekprimary.co.za", "Long": 18.421963, "Lat": -34.130335, "Cell": "0845573836", "Tel": "0216894069", "FlyDistance": 33, "Suburb": "FISH HOEK", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Upper Recreation Road", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 22, "Name": "PAUL GREYLING PRIM.", "Email": "lpg@lpg.wcape.school.za", "Long": 18.431778, "Lat": -34.132093, "Cell": "0824190554", "Tel": "0217978010", "FlyDistance": 32, "Suburb": "FISH HOEK", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Sunrayweg", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 23, "Name": "WEMMERSHOEK PRIM.", "Email": "admin@whps.wcape.school.za", "Long": 19.045792, "Lat": -33.877057, "Cell": "0840601556", "Tel": "0288401328", "FlyDistance": 32, "Suburb": "FRANSCHOEK", "Town_City": "OUTSIDE A TOWN", "StreetAddress": "Franschhoekweg R45", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 1116 },
    { "Id": 24, "Name": "GORDONSBAAI LS.", "Email": "admin@gbprimary.co.za", "Long": 18.875086, "Lat": -34.156514, "Cell": "0725856310", "Tel": "0285721337", "FlyDistance": 16, "Suburb": "GORDONS BAY", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Avondrusstraat", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 25, "Name": "TEMPERANCE TOWN PRIM.", "Email": "admin@temperancetownps.wcape.school.za", "Long": 18.882956, "Lat": -34.153242, "Cell": "0842596461", "Tel": "0236163262", "FlyDistance": 16, "Suburb": "GORDONS BAY", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Appollostraat", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 573 },
    { "Id": 26, "Name": "KATHLEEN MURRAY PRIM.", "Email": "kathleenmurrayps@gmail.com", "Long": 19.003181, "Lat": -34.154667, "Cell": "0733242111", "Tel": "0443821422", "FlyDistance": 25, "Suburb": "GRABOUW", "Town_City": "GRABOUW", "StreetAddress": "Wyngaardstraat 00", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 1116 },
    { "Id": 27, "Name": "PINEVIEW PRIM.", "Email": "jakkvd@gmail.com", "Long": 19.001157, "Lat": -34.156845, "Cell": "0825332271", "Tel": "0443431650", "FlyDistance": 25, "Suburb": "GRABOUW", "Town_City": "GRABOUW", "StreetAddress": "Russellstraat", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 1116 },
    { "Id": 28, "Name": "UMYEZO WAMA APILE PRIM.", "Email": "admin@umyezo.wcape.school.za", "Long": 18.987105, "Lat": -34.160395, "Cell": "0828945857", "Tel": "0443826506", "FlyDistance": 24, "Suburb": "GRABOUW", "Town_City": "GRABOUW", "StreetAddress": "Escom Building", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 1116 },
    { "Id": 29, "Name": "WEBER GEDENK NGK PRIM.", "Email": "admin@weberngk.wcape.school.za", "Long": 18.847351, "Lat": -33.98317, "Cell": "0790324771", "Tel": "0283122677", "FlyDistance": 10, "Suburb": "JAMESTOWN", "Town_City": "STELLENBOSCH", "StreetAddress": "Tribute Street Jamestown", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 1116 },
    { "Id": 30, "Name": "BAY PRIM.", "Email": "head@bayprimary.co.za", "Long": 18.424574, "Lat": -34.131276, "Cell": "0828951746", "Tel": "0216894001", "FlyDistance": 33, "Suburb": "KALK BAY", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Junior Campus", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 31, "Name": "ST. JAMES RC PRIM.", "Email": "stjamesprimary1@gmail.com", "Long": 18.446376, "Lat": -34.128361, "Cell": "0827892173", "Tel": "0216716502", "FlyDistance": 31, "Suburb": "KALK BAY", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "2 Barton Road", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 261 },
    { "Id": 32, "Name": "KENRIDGE PRIM.", "Email": "sandy.smith@kenridge.org.za", "Long": 18.63408, "Lat": -33.860049, "Cell": "0825522997", "Tel": "0219521250", "FlyDistance": 24, "Suburb": "KENRIDGE", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Van Riebeeck Avenue", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 33, "Name": "KIRSTENHOF PRIM.", "Email": "school@kirstenhofprimary.co.za", "Long": 18.45521, "Lat": -34.069472, "Cell": "0824137272", "Tel": "0217978047", "FlyDistance": 29, "Suburb": "KIRSTENHOF", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "18 Lente Street", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 34, "Name": "DANIE ACKERMANN PRIM.", "Email": "admin@dackermanps.wcape.school.za", "Long": 18.832648, "Lat": -34.086395, "Cell": "0845072653", "Tel": "0285141361", "FlyDistance": 8, "Suburb": "MALL TRIANGLE", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "De Beerslaan", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 266 },
    { "Id": 35, "Name": "MILNERTON PRIM.", "Email": "schooladmin@mps.wcape.school.za", "Long": 18.499111, "Lat": -33.873961, "Cell": "0780008910", "Tel": "0217852722", "FlyDistance": 31, "Suburb": "MILNERTON", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Zastron Road", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 36, "Name": "SEAMOUNT PRIM.", "Email": "admin@seamount.org", "Long": 18.502328, "Lat": -33.868426, "Cell": "0824958984", "Tel": "0217831623", "FlyDistance": 31, "Suburb": "MILNERTON", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Ixia Street", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 37, "Name": "WOODBRIDGE PRIM.", "Email": "admin@woodbridge.wcape.school.za", "Long": 18.489436, "Lat": -33.889646, "Cell": "0833877192", "Tel": "0216892727", "FlyDistance": 31, "Suburb": "MILNERTON", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "7 Union Road", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 38, "Name": "ALPHA PRIM.", "Email": "root@alphaps.wcape.school.za", "Long": 18.655218, "Lat": -33.828184, "Cell": "0825358055", "Tel": "0216942315", "FlyDistance": 26, "Suburb": "MORNINGSTAR", "Town_City": "DURBANVILLE", "StreetAddress": "H/V Skool- En Kerkstraat", "Sector": "PUBLIC", "Phase": "COMBINED SCHOOL", "Kids": 1116 },
    { "Id": 39, "Name": "BELLPARK PRIM.", "Email": "admin@bellpark.co.za", "Long": 18.641212, "Lat": -33.886167, "Cell": "0828512209", "Tel": "0217621002", "FlyDistance": 21, "Suburb": "OAKDALE", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Sandfordstraat", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 290 },
    { "Id": 40, "Name": "BELLVILLE PRIM.", "Email": "info@lsbellville.wcape.school.za", "Long": 18.63438, "Lat": -33.895255, "Cell": "0828291378", "Tel": "0219341817", "FlyDistance": 21, "Suburb": "OAKDALE", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "St Georgesstraat", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 41, "Name": "BELLVILLE-NOORD PRIM.", "Email": "lbnoord@bnprim.co.za", "Long": 18.640516, "Lat": -33.892162, "Cell": "0744301013", "Tel": "0219036815", "FlyDistance": 20, "Suburb": "OAKDALE", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Van Der Stelstraat", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 42, "Name": "REDDAM HOUSE - SOMERSET LAKES", "Email": "cathryn.theron@reddam.house", "Long": 18.863295, "Lat": -34.108673, "Cell": "0823320199", "Tel": "0219485241", "FlyDistance": 12, "Suburb": "ONVERWACHT VILLAGE", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": ".", "Sector": "INDEPENDENT", "Phase": "COMBINED SCHOOL", "Kids": null },
    { "Id": 43, "Name": "SIMONDIUM PRIM.", "Email": "admin@simondiumps.wcape.school.za", "Long": 18.958731, "Lat": -33.841472, "Cell": "0795618296", "Tel": "0218594550", "FlyDistance": 29, "Suburb": "PAARL", "Town_City": "OUTSIDE A TOWN", "StreetAddress": "Hoofweg", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 1116 },
    { "Id": 44, "Name": "FANIE THERON PRIM.", "Email": "info@fanietheron.co.za", "Long": 18.720027, "Lat": -33.838171, "Cell": "0837253652", "Tel": "0219513318", "FlyDistance": 23, "Suburb": "PEERLESS PARK", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Bosmanstraat", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 45, "Name": "CANNONS CREEK PRIM.", "Email": "admin@cannonscreek.co.za", "Long": 18.506927, "Lat": -33.939781, "Cell": "0733679065", "Tel": "0219515379", "FlyDistance": 26, "Suburb": "PINELANDS", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Nursery Way", "Sector": "INDEPENDENT", "Phase": "COMBINED SCHOOL", "Kids": null },
    { "Id": 46, "Name": "GAIA WALDORF SCHOOL", "Email": "admin@gaiawaldorf.co.za", "Long": 18.489704, "Lat": -33.940894, "Cell": ".", "Tel": "0214470546", "FlyDistance": 28, "Suburb": "PINELANDS", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Oude Molen Village", "Sector": "INDEPENDENT", "Phase": "PRIMARY SCHOOL", "Kids": null },
    { "Id": 47, "Name": "GRACE PRIMARY SCHOOL", "Email": "info@graceprimary.org", "Long": 18.515947436, "Lat": -33.940052923, "Cell": "0829233385", "Tel": "0219007040", "FlyDistance": 26, "Suburb": "PINELANDS", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "3 Nerine Avenue", "Sector": "INDEPENDENT", "Phase": "PRIMARY SCHOOL", "Kids": null },
    { "Id": 48, "Name": "PINEHURST PRIM.", "Email": "secretary@phps.org.za", "Long": 18.517004, "Lat": -33.93288, "Cell": "0833267900", "Tel": "0219344527", "FlyDistance": 26, "Suburb": "PINELANDS", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Rhone", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 49, "Name": "PINELANDS NORTH PRIM.", "Email": "admin@pnps.co.za", "Long": 18.512357, "Lat": -33.927318, "Cell": "0725558600", "Tel": "0219034388", "FlyDistance": 27, "Suburb": "PINELANDS", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Richmond Avenue", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 50, "Name": "THE PINELANDS PRIM.", "Email": "lowton_d@blueschool.co.za", "Long": 18.498601, "Lat": -33.937132, "Cell": "0823322007", "Tel": "0216941736", "FlyDistance": 27, "Suburb": "PINELANDS", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "10 Central Square", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 51, "Name": "PNIEL PRIM.", "Email": "admin@pnielps.wcape.school.za", "Long": 18.965505, "Lat": -33.88776, "Cell": "0839923684", "Tel": "0288414645", "FlyDistance": 26, "Suburb": "PNIEL", "Town_City": "OUTSIDE A TOWN", "StreetAddress": "Hoofweg", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 1116 },
    { "Id": 52, "Name": "BASTION PRIM.", "Email": "eksteen@bastionps.wcape.school.za", "Long": 18.699066, "Lat": -33.88661, "Cell": "0829773657", "Tel": "0218833229", "FlyDistance": 19, "Suburb": "PROTEA HEIGHTS", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Jakarandastraat", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 53, "Name": "PROTEA HEIGHTS ACADEMY", "Email": "principal@phahs.org.za", "Long": 18.700267, "Lat": -33.89, "Cell": "0784220783", "Tel": "0218630537", "FlyDistance": 18, "Suburb": "PROTEA HEIGHTS", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Cnr Helling And Jacaranda Str", "Sector": "PUBLIC", "Phase": "COMBINED SCHOOL", "Kids": 193 },
    { "Id": 54, "Name": "PROTEA HEIGHTS PRIMARY SCHOOL", "Email": "proteaheights.ps@gmail.com", "Long": 18.700267, "Lat": -33.89, "Cell": "0842065522", "Tel": "0219195369", "FlyDistance": 18, "Suburb": "PROTEA HEIGHTS", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "cnr Helling and Jacaranda Str", "Sector": "PUBLIC", "Phase": "COMBINED SCHOOL", "Kids": null },
    { "Id": 55, "Name": "SOMERSET HOUSE PREP.", "Email": "info@somersethouse.co.za", "Long": 18.857776, "Lat": -34.078691, "Cell": "0744434589", "Tel": "0283410830", "FlyDistance": 9, "Suburb": "ROUNDHAY", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Drama Street", "Sector": "INDEPENDENT", "Phase": "PRIMARY SCHOOL", "Kids": null },
    { "Id": 56, "Name": "DE WAVEREN PRIM.", "Email": "admin@dewaverenps.wcape.school.za", "Long": 18.559168, "Lat": -33.920367, "Cell": "0825331636", "Tel": "0219341438", "FlyDistance": 23, "Suburb": "RUYTERWACHT", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Hugenootstraat", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 589 },
    { "Id": 57, "Name": "RUYTERWACHT VOORB.", "Email": "hoof@ruyterwacht.co.za", "Long": 18.557394, "Lat": -33.920837, "Cell": "0829239359", "Tel": "0219881200", "FlyDistance": 24, "Suburb": "RUYTERWACHT", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Birkenheadstraat", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 559 },
    { "Id": 58, "Name": "SIR LOWRY'S PASS PRIM.", "Email": "admin@sirlowryspassps.wcape.school.za", "Long": 18.907071, "Lat": -34.120382, "Cell": "0837626024", "Tel": "0285123795", "FlyDistance": 16, "Suburb": "SIR LOWRYS PASS", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Gordonsbaaiweg", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 1116 },
    { "Id": 59, "Name": "BEAUMONT PRIM.", "Email": "gordon@beaumont4u.co.za", "Long": 18.870334, "Lat": -34.075375, "Cell": "0737623197", "Tel": "0287222920", "FlyDistance": 10, "Suburb": "SOMERSET WEST", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Van Der Merwe Street", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 60, "Name": "DE HOOP LS.", "Email": "head@dehoop.wcape.school.za", "Long": 18.837556, "Lat": -34.070026, "Cell": "0842542790", "Tel": "0285371403", "FlyDistance": 7, "Suburb": "SOMERSET WEST", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Ou Stellenboschweg", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 61, "Name": "MONTGOMERY & MILLER ACADEMY", "Email": "wilma@mm.academy", "Long": 18.843305, "Lat": -34.083252, "Cell": "0217042738", "Tel": "0218514381", "FlyDistance": 8, "Suburb": "SOMERSET WEST", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "40 St. James Street", "Sector": "INDEPENDENT", "Phase": "COMBINED SCHOOL", "Kids": null },
    { "Id": 62, "Name": "SOMERSET-WES LS.", "Email": "summies@swps.wcape.school.za", "Long": 18.846543, "Lat": -34.083498, "Cell": "0725408382", "Tel": "0285143179", "FlyDistance": 9, "Suburb": "SOMERSET WEST", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Dirkie Uysstraat", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 63, "Name": "SOMERSET-WES MET PRIM.", "Email": "admin@somersetwestmps.wcape.school.za", "Long": 18.849421, "Lat": -34.086449, "Cell": "0828961289", "Tel": "0285142560", "FlyDistance": 9, "Suburb": "SOMERSET WEST", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Lourensstraat", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 236 },
    { "Id": 64, "Name": "TEREO COMMUNITY SCHOOL", "Email": "tereo@adept.co.za", "Long": 18.838224, "Lat": -34.091415, "Cell": "0833701046", "Tel": "0287221384", "FlyDistance": 9, "Suburb": "SOMERSET WEST", "Town_City": "SOMERSET WEST", "StreetAddress": "Old Ambulance Station", "Sector": "INDEPENDENT", "Phase": "PRIMARY SCHOOL", "Kids": null },
    { "Id": 65, "Name": "A.F. LOUW LS.", "Email": "admin@aflouw.co.za", "Long": 18.858189, "Lat": -33.924407, "Cell": "0722982559", "Tel": "0218592127", "FlyDistance": 16, "Suburb": "STELLENBOSCH", "Town_City": "STELLENBOSCH", "StreetAddress": "La Collineweg 1", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 559 },
    { "Id": 66, "Name": "EIKESTAD LS.", "Email": "eikestad@eike.co.za", "Long": 18.854861, "Lat": -33.94517, "Cell": "0832773427", "Tel": "0218592429", "FlyDistance": 14, "Suburb": "STELLENBOSCH", "Town_City": "STELLENBOSCH", "StreetAddress": "Doornboschstraat", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 67, "Name": "RHENISH PRIM.", "Email": "rhenish@mweb.co.za", "Long": 18.855358, "Lat": -33.946792, "Cell": "0725280989", "Tel": "0288402268", "FlyDistance": 14, "Suburb": "STELLENBOSCH", "Town_City": "STELLENBOSCH", "StreetAddress": "Doornbosch Street", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 68, "Name": "STELLENBOSCH LS.", "Email": "sunette@lstellen.co.za", "Long": 18.880796, "Lat": -33.93341, "Cell": "0731446886", "Tel": "0218489825", "FlyDistance": 16, "Suburb": "STELLENBOSCH", "Town_City": "STELLENBOSCH", "StreetAddress": "Endlerstraat 0", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 69, "Name": "HELDERBERG LS", "Email": "hpsadmin@hbc.ac.za", "Long": 18.841647, "Lat": -34.053168, "Cell": "0842806485", "Tel": "0283151884", "FlyDistance": 7, "Suburb": "STELLENBOSCH FARMS", "Town_City": "SOMERSET WEST", "StreetAddress": "Helderberg College Campus", "Sector": "INDEPENDENT", "Phase": "PRIMARY SCHOOL", "Kids": null },
    { "Id": 70, "Name": "ALTENA PRIMARY SCHOOL", "Email": "unknown", "Long": 18.845927, "Lat": -34.111626, "Cell": "0834147260", "Tel": "0219195469", "FlyDistance": 11, "Suburb": "STRAND", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": ".", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": null },
    { "Id": 71, "Name": "HENDRIK LOUW LS.", "Email": "hendrikl@mweb.co.za", "Long": 18.82821, "Lat": -34.113947, "Cell": "0798830149", "Tel": "0236163431", "FlyDistance": 10, "Suburb": "STRAND", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Piet Retief Street", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 72, "Name": "LOCHNERHOF LS.", "Email": "admin@lochnerhof.wcape.school.za", "Long": 18.832508, "Lat": -34.106528, "Cell": "0836229108", "Tel": "0236162731", "FlyDistance": 9, "Suburb": "STRAND", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Sarel Cilliersstraat", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 73, "Name": "LORETO PRIM.", "Email": "loreto@webmail.co.za", "Long": 18.833597, "Lat": -34.118113, "Cell": "0826540465", "Tel": "0285143276", "FlyDistance": 10, "Suburb": "STRAND", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "16 Gordons Bay Road", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 74, "Name": "RUSTHOF PRIM.", "Email": "admin@rusthofps.wcape.school.za", "Long": 18.851705, "Lat": -34.128211, "Cell": "0842459995", "Tel": "0448840426", "FlyDistance": 12, "Suburb": "STRAND", "Town_City": "STRAND", "StreetAddress": "11de Straat", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 1116 },
    { "Id": 75, "Name": "SOLOMON QATYANA PRIM.", "Email": "solomonqatyanaps@gmail.com", "Long": 18.859128, "Lat": -34.108815, "Cell": "0837244346", "Tel": "0285721600", "FlyDistance": 11, "Suburb": "STRAND", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "1 Hlathi Drive", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 1116 },
    { "Id": 76, "Name": "STRAND MOS PRIM.", "Email": "admin@strandmoslemps.wcape.school.za", "Long": 18.841658, "Lat": -34.12235, "Cell": "0825645092", "Tel": "0448744166", "FlyDistance": 11, "Suburb": "STRAND", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Nolte Sraat", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 559 },
    { "Id": 77, "Name": "CAPELLA HOUSE", "Email": "capella@capellahouse.co.za", "Long": 18.432249, "Lat": -34.131976, "Cell": "0741819808", "Tel": "0212000757", "FlyDistance": 32, "Suburb": "SUNNYDALE", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Cnr Of Kommetjie Rd &", "Sector": "INDEPENDENT", "Phase": "PRIMARY SCHOOL", "Kids": null },
    { "Id": 78, "Name": "CURRO SITARI", "Email": "unknown", "Long": 18.776836, "Lat": -34.051546, "Cell": "0834482332", "Tel": "0215587337", "FlyDistance": 1, "Suburb": "Sitari Country Estate", "Town_City": ".", "StreetAddress": ".", "Sector": "INDEPENDENT", "Phase": "COMBINED SCHOOL", "Kids": null },
    { "Id": 79, "Name": "EXCELSIOR PRIM. (BELLVILLE)", "Email": "admin@exprim.co.za", "Long": 18.649694, "Lat": -33.900449, "Cell": "0845166187", "Tel": "0219887464", "FlyDistance": 19, "Suburb": "THALMAN/DE LA HAYE", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Van Dyckstraat", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 80, "Name": "PANORAMA LS.", "Email": "panoram6@mweb.co.za", "Long": 18.570139, "Lat": -33.874367, "Cell": "0791484880", "Tel": "0219515460", "FlyDistance": 26, "Suburb": "WELGELEGEN", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Malmesbury Street", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 },
    { "Id": 81, "Name": "WELGEMOED PRIM.", "Email": "hoof@welgemoedprimary.co.za", "Long": 18.618245, "Lat": -33.872955, "Cell": "0843685371", "Tel": "0219514456", "FlyDistance": 23, "Suburb": "WELGEMOED", "Town_City": "CITY OF CAPE TOWN", "StreetAddress": "Jip De Jagerrylaan", "Sector": "PUBLIC", "Phase": "PRIMARY SCHOOL", "Kids": 193 }
];