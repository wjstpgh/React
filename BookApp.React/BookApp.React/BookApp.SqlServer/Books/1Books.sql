CREATE TABLE [dbo].[Books]
(
	[Id] INT NOT NULL PRIMARY KEY Identity(1,1),
	Title NVarChar(255) NOT Null,
	Description NVarChar(MAX) Null,

	[Created] DateTime Default(GetDate()) Null,  --생성일
)
Go
