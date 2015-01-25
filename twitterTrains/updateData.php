<?php
	$file = fopen("data.json","w");
	echo fwrite($file, $_POST['data_to_send']);
	fclose($file);
?>