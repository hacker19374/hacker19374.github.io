<?php
  // Open the counter file in read mode
  $file = fopen('counter.txt', 'r');

  // Read the current count from the file
  $count = fread($file, filesize('counter.txt'));

  // Close the file
  fclose($file);

  // Increment the count
  $count++;

  // Open the counter file in write mode
  $file = fopen('counter.txt', 'w');

  // Write the updated count to the file
  fwrite($file, $count);

  // Close the file
  fclose($file);

  // Echo the count
  echo $count;
?>