<?php

class MySqlHelper
{
    private $isProd = false;

    private $connect_UserName = "silversi_Pierre";
    private $connect_Password = "wynand1992";
    private $connect_Server = "localhost";
    private $connect_DB = "pierre";

    private $connection;

    public function Connect()
    {
        $server = $this->connect_Server;
        $userName = $this->connect_UserName;
        $password = $this->connect_Password;
        $db = $this->connect_DB;
        $this->connection = mysqli_connect("$server", "$userName", "$password");

        if (!$this->connection) {
            echo "Error: Unable to connect to MySQL." . PHP_EOL;
            echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
            echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
            exit;
        }

        mysqli_select_db($this->connection, "$db");
    }

    public function SafeValue($value)
    {
        return mysqli_real_escape_string($this->connection, stripslashes(ltrim(rtrim($value))));
    }

    public function Disconnect()
    {
        mysqli_close($this->connection);
    }

    public function GetLatestId()
    {
        return mysqli_insert_id($this->connection);
    }

    public function Query($string_query)
    {
        $res = mysqli_query($this->connection, $string_query);
        if (!$res) {
            echo mysqli_error($this->connection);
        }
        return $res;
    }

    public function GetRow($string_query)
    {
        $res = mysqli_query($this->connection, $string_query);
        if (!$res) {
            echo mysqli_error($this->connection);
        }
        return mysqli_fetch_assoc($res);
    }

    public function GetRows($string_query)
    {
        $query = mysqli_query($this->connection, $string_query);
        $result = [];
        if (!$query) {
            echo mysqli_error($this->connection);
        } else {
            while ($row = mysqli_fetch_assoc($query)) {
                $result[] = $row;
            }
        }

        return $result;
    }

    public function AsBool($value)
    {
        return $value == "1";
    }

    public function AsInt($value)
    {
        return intval($value);
    }

    public function Now()
    {
        return date("Y-m-d H:i:s");
    }
}

?>
<?php ?>
