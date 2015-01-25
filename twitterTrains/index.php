<!DOCTYPE html>
<html>
<head>
	<title>Twitter Client</title>
	<script type="text/javascript" src="lib/jquery-1.11.1.min.js"></script>
	<link rel="stylesheet" href="lib/jstree/dist/themes/default/style.min.css" />
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script src="lib/jstree/dist/jstree.min.js"></script>

	<script type="text/javascript">
		$(document).ready(function() {
			$('#dataTweets').jstree({
				"core" : {
					"animation" : 0,
					"check_callback" : true,
					"themes" : { "stripes" : true },
					'data' : {
						'url': 'data.json',
					}
				},
				"types" : {
					"#" : {
						"icon" : "img/twitter-bird.png"
					},
					"tweet" : {
						"icon" : "img/twitter-bird.png"
					}
				},
				"plugins" : ["contextmenu", "dnd", "search", "state", "types", "wholerow"]
			});
			updateData();
			setInterval(updateData, 10000);
			$("#btnAddTweet").click(function() {
				var ref_id = $("#" + $("#dataTweets").jstree("get_selected")[0]).attr("id");
				$.ajax({
					url: "http://localhost:8080/TwitterServer/REST/WebService/AddTweet?ref_id=" + ref_id,
					type: 'POST',
					success: function(data) {
						updateData();
					},
					error: function(jqxhr, status, errorMsg) {
						console.log('Error: ');
						console.log('jqxhr: ' + jqxhr);
						console.log('status: ' + status);
						console.log('errorMsg: ' + errorMsg);
					}
				});
			});
		});

		function updateData() {
			$.ajax({
				url: "http://localhost:8080/TwitterServer/REST/WebService/GetTweets",
				type: "GET",
				jsonp: "callback",
				dataType: "jsonp",
				success: function(data) {
					var jsonCode = 'data_to_send=' + JSON.stringify(data);
					$.ajax({
						url: "updateData.php",
						type: "POST",
						data: jsonCode,
						success: function(data) {
							$('#dataTweets').jstree("open_all");
							$('#dataTweets').jstree("refresh");
						},
						error: function(jqxhr, status, errorMsg) {
							console.log('Error: ');
							console.log('jqxhr: ' + jqxhr);
							console.log('status: ' + status);
							console.log('errorMsg: ' + errorMsg);
						}
					});
				},
				error: function(jqxhr, status, errorMsg) {
					console.log('Error: ');
					console.log('jqxhr: ' + jqxhr);
					console.log('status: ' + status);
					console.log('errorMsg: ' + errorMsg);
				}
			});
		}

	</script>
	<style type="text/css">
		#pageTitle {
			text-align: center;
			color: black;
		}
		.demo { overflow:auto; border:1px solid silver; min-height:100px; }
		#btnAddTweet {
			width: 100px;
			height: 30px;
			margin-bottom: 10px;
		}
	</style>
</head>
<body>
	<h1 id="pageTitle">Twitter Client</h1>
	<input id="btnAddTweet" type="button" value="Add Tweet"/>
	<div id="dataTweets" class="demo"></div>
</body>
</html>
