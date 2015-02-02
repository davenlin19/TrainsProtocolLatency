<?php
	header("Access-Control-Allow-Origin: *");
?>
<!DOCTYPE html>
<html>
<head>
	<title>Zamazon Client</title>
	<script type="text/javascript" src="lib/jquery-1.11.1.min.js"></script>
	<script type="text/javascript">
		$(document).ready(function() {
			$.ajax({
				url: "http://localhost:8080/ZamazonServer/REST/WebService/GetAProduct?ref=" + getUrlParameter("productID"),
				type: 'GET',
				jsonp: 'callback',
				dataType: "jsonp",
				success: function(data) {
					$("#productInfo #productInfoValue p.ref").text(data.ref);
					$("#productInfo #productInfoValue p.name").text(data.name);
					$("#productInfo #productInfoValue p.quantity").text(data.quantity);
					$("#productOrder input#orderNumber").attr("max", data.quantity);
				},
				error: function(jqxhr, status, errorMsg) {
					console.log('Error: ');
					console.log('jqxhr: ' + jqxhr);
					console.log('status: ' + status);
					console.log('errorMsg: ' + errorMsg);
				}
			});

			// order a product
			$("#productOrder").submit(function() {
				var ref = 1;
				var quantity = $("#orderNumber").val();
				$.ajax({
					url: "http://localhost:8080/ZamazonServer/REST/WebService/order?ref=" + ref + "&quantity=" + quantity,
					type: 'POST',
					success: function(data) {
						console.log(data);
					},
					error: function(jqxhr, status, errorMsg) {
						console.log('Error: ');
						console.log('jqxhr: ' + jqxhr);
						console.log('status: ' + status);
						console.log('errorMsg: ' + errorMsg);
					}
				});
				document.location.href = "http://localhost/dev/ZamazonClient/product.php?productID=" + ref;
				return false;
			});
		});

		function commander(productID) {
			document.location.href = "product.php?productID=" + productID;
		}

		function getUrlParameter(sParam)
		{
			var sPageURL = window.location.search.substring(1);
			var sURLVariables = sPageURL.split('&');
			for (var i = 0; i < sURLVariables.length; i++)
			{
				var sParameterName = sURLVariables[i].split('=');
				if (sParameterName[0] == sParam)
				{
					return sParameterName[1];
				}
			}
		}
	</script>
	<style type="text/css">
		#pageTitle {
			text-align: center;
			color: black;
		}

		#productInfo {

		}

		#productInfo h2 {
			text-align: left;
			color: black;
		}

		#productInfo #productInfoLabel {
			width: 100px;
			display: inline-block;
			font-weight: bold;
		}

		#productInfo #productInfoValue {
			display: inline-block;
		}

		#productOrder .orderNumberLabel {
			display: inline-block;
			width: 100px;
		}

		#productOrder input.submit {
			margin-left: 10px;
		}

		#returnLink {
			display: block;
			margin-top: 15px;
		}
	</style>
</head>
<body>
	<h1 id="pageTitle">Zamazon Client</h1>
	<div id="productInfo">
		<h2>Information:</h2>
		<span id="productInfoLabel">
			<p class="ref">Ref:</p>
			<p class="name">Name:</p>
			<p class="quantity">Quantity:</p>
		</span>
		<span id="productInfoValue">
			<p class="ref"></p>
			<p class="name"></p>
			<p class="quantity"></p>
		</span>
	</div>
	<form id="productOrder">
		<span class="orderNumberLabel">Nombre:</span><input id="orderNumber" type="number"/>
		<input class="submit" type="submit" value="Commander"/>
	</form>
	<a id="returnLink" href="index.php">Page d'accueil</a>
</body>
</html>