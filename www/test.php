<?php

function searchCompany($companyName) {
    $apiKey = 'kmudq9cyzkmbakpg9992gjbj';
    $url = 'http://api.duedil.com/open/search?q=' . $companyName . '&api_key=' . $apiKey;

    return file_get_contents($url);
}

function getCompany($companyID) {
    $response = array();
    $apiKey = 'kmudq9cyzkmbakpg9992gjbj';
    $url = 'http://api.duedil.com/open/uk/company/' . $companyID . '?api_key=' . $apiKey;
    $response = file_get_contents($url);
    return $response;
}


$possible_url = array("get_app_list", "get_app", "searchCompany" , "getCompany");

if (isset($_GET["action"]) && in_array($_GET["action"], $possible_url))  {

    switch ($_GET["action"]) {
        case "searchCompany":
            if (isset($_GET["companyName"]))
                $value = searchCompany($_GET["companyName"]);
            break;

        case "getCompany":
            if (isset($_GET["companyID"]))
                $value = getCompany($_GET["companyID"]);
            break;
    }
}

exit($value);
