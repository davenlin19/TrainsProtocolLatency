<!DOCTYPE html>
<html>
<head>
	<title>Zamazon Client</title>
	<script type="text/javascript" src="lib/jquery-1.11.1.min.js"></script>
	<script type="text/javascript">
		$(document).ready(function() {
			$.ajax({
				url: "http://localhost:8080/ZamazonServer/REST/WebService/GetAllProducts",
				type: 'GET',
				jsonp: 'callback',
				dataType: "jsonp",
				success: function(data) {
					$("#product_1 td:eq(0)").text(data[0].ref);
					$("#product_1 td:eq(1)").text(data[0].name);
					$("#product_1 td:eq(2)").text(data[0].quantity);
				},
				error: function(jqxhr, status, errorMsg) {
					console.log('Error: ');
					console.log('jqxhr: ' + jqxhr);
					console.log('status: ' + status);
					console.log('errorMsg: ' + errorMsg);
				}
			});
		});

		function commander(productID) {
			document.location.href = "product.php?productID=" + productID;
		}
	</script>
	<style type="text/css">
		#pageTitle {
			text-align: center;
			color: black;
		}

		#productList {
			background-color: #e2eff5;
		}

		#productList tr th {
			border-bottom: 1px solid black;
		}

		#productList th, #productList td {
			padding: 5px 25px;
			text-align: center;
		}
	</style>
</head>
<body>
	<h1 id="pageTitle">Zamazon Client</h1>
	<table id="productList">
		<tr>
			<th>Ref</th>
			<th>Name</th>
			<th>Quantity</th>
			<th></th>
		</tr>
		<tr id="product_1">
			<td></td>
			<td></td>
			<td></td>
			<td><button onclick="commander(1)">Commander</button></td>
		</tr>
	</table>
</body>
</html>
