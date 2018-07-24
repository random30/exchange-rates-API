It's an API that allows to check exchange rates of various currencies and convert them to USD. Here is an example of a very simple application that is using the API:
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Exchange rates</title>
</head>
<body>
    <input type="text" id="from" placeholder="from">
    <input type="text" id="to" placeholder="to">
    <input type="text" id="quantity" placeholder="quantity">
    <input type="submit" id="submit">
    <div id="result"></div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script>
        var quantity;
        var from;
        var to;
        var value1;
        var value2;

        $("#submit").click(function() {
            if($("#quantity").val() != ""){ quantity = $("#quantity").val(); }
            else { quantity = 1; }
            if($("#from").val() != ""){ from = $("#from").val(); }
            else { from = "USD"; }
            if($("#to").val() != ""){ to = $("#to").val(); }
            else { to = "USD"; }

            $.get("http://mighty-lowlands-61909.herokuapp.com/rate/" + from, function(data) {
                value1 = JSON.stringify(data[0].rate);
            });
            $.get("http://mighty-lowlands-61909.herokuapp.com/rate/" + to, function(data) {
                value2 = JSON.stringify(data[0].rate);
                $("#result").html("Result: "+value2/value1*quantity);
            });
        });
    </script>
</body>
</html>
```
The API requires cross-origin resource sharing so it is needed to install a proper extension in user's browser, e.g:
https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi

The API is deployed using Heroku, here is an example:
http://mighty-lowlands-61909.herokuapp.com/rate/USD

Here is a link to swaggerhub documentation: https://app.swaggerhub.com/apis/Stazysci/ExchangeRates/1.0.0
