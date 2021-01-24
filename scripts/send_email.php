<?php

### Konfiguration ###

# Bitte passen Sie die folgenden Werte an, bevor Sie das Script benutzen!

# An welche Adresse sollen die Mails gesendet werden?
$strEmpfaenger = 'info@sarahdennard.de';

# Welche Adresse soll als Absender angegeben werden?
# (Manche Hoster lassen diese Angabe vor dem Versenden der Mail ueberschreiben)
$strFrom       = '"Formmailer" <xxx@xxxxxx.de>';

# Welchen Betreff sollen die Mails erhalten?
$strSubject    = 'Feedback von www.xxxxx.de';

# Zu welcher Seite soll als "Danke-Seite" weitergeleitet werden?
# Wichtig: Sie muessen hier eine gueltige HTTP-Adresse angeben!
$strReturnhtml = 'http://www.sarahdennard.de/subpages/contact.html';

# Welche(s) Zeichen soll(en) zwischen dem Feldnamen und dem angegebenen Wert stehen?
$strDelimiter  = ":\t";

### Ende Konfiguration ###

if($_POST)
{
$strMailtext = "";

while(list($strName,$value) = each($_POST))
{
  if(is_array($value))
  {
   foreach($value as $value_array)
   {
    $strMailtext .= $strName.$strDelimiter.$value_array."\n";
   }
  }
  else
  {
   $strMailtext .= $strName.$strDelimiter.$value."\n";
  }
}

if(get_magic_quotes_gpc())
{
  $strMailtext = stripslashes($strMailtext);
}

mail($strEmpfaenger, $strSubject, $strMailtext, "From: ".$strFrom)
  or die("Die Mail konnte nicht versendet werden.");
header("Location: $strReturnhtml");
exit;
}

?>