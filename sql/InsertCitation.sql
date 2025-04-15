USE [ParkingCitations]
GO

INSERT INTO [dbo].[Citations]
           ([citationID]
           ,[citationNumber]
           ,[citationDateTime]
           ,[officerID]
           ,[violationID]
           ,[citationLocation]
           ,[ownerFirstName]
           ,[ownerLastName]
           ,[ownerMiddleName]
           ,[ownerAddr1]
           ,[ownerAddr2]
           ,[ownerCity]
           ,[ownerStateID]
           ,[ownerPostalCode]
           ,[MakeID]
           ,[licensePlateNumber]
           ,[licensePlateStateID]
           ,[dispositionID]
           ,[amtPaid]
           ,[notes]
           ,[dateEntered]
           ,[lastUpdateDate]
           ,[lastUserID])
     VALUES
           (2,
           24689,
           '2025-04-02T14:30:00Z',
           1,
           1,
           '123 Test Street',
           'John',
           'Doe',
           'Test',
           '456 Elm St',
           '',
           'Newport',
           17,
           '41071',
           1,
           'ABC123',
           17,
           1,
           0,
           'No Notes',
           '2025-04-02T14:30:00Z',
           '2025-04-02T14:30:00Z',
           1)
GO


