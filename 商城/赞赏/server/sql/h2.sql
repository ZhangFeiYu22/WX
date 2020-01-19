CREATE TABLE `PAY_DETAIL` (
  `ID` INT NOT NULL AUTO_INCREMENT ,
  `OPEN_ID` VARCHAR(100) NOT NULL ,
  `TOTAL_FEE` INT(8) NOT NULL DEFAULT 0 ,
  `TRANSACTION_ID` VARCHAR(100) NOT NULL ,
  `TRADE_NUMBER` VARCHAR(100) NOT NULL ,
  `PAY_TIME` DATETIME NOT NULL ,
  PRIMARY KEY (`ID`)  );

CREATE TABLE `PAY_USER` (
  `OPEN_ID` VARCHAR(100) NOT NULL ,
  `NICK_NAME` VARCHAR(100) NOT NULL ,
  `AVATAR_URL` VARCHAR(500) NOT NULL ,
  `UPDATE_TIME` DATETIME NOT NULL ,
  PRIMARY KEY (`OPEN_ID`) )
;