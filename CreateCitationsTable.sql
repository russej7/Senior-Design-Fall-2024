USE [ParkingCitations]
GO

/****** Object:  Table [dbo].[Citations]    Script Date: 2/17/2025 4:08:59 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Citations](
	[citationID] [int] NOT NULL,
	[citationNumber] [int] NOT NULL,
	[citationDateTime] [datetime] NOT NULL,
	[officerID] [int] NOT NULL,
	[violationID] [int] NOT NULL,
	[citationLocation] [varchar](255) NOT NULL,
	[ownerFirstName] [varchar](255) NULL,
	[ownerLastName] [varchar](255) NULL,
	[ownerMiddleName] [varchar](255) NULL,
	[ownerAddr1] [varchar](255) NULL,
	[ownerAddr2] [varchar](255) NULL,
	[ownerCity] [varchar](255) NULL,
	[ownerStateID] [int] NULL,
	[ownerPostalCode] [varchar](50) NULL,
	[MakeID] [int] NULL,
	[ModelID] [int] NULL,
	[licensePlateNumber] [varchar](13) NOT NULL,
	[licensePlateStateID] [int] NULL,
	[dispositionID] [int] NOT NULL,
	[amtPaid] [decimal](19, 2) NOT NULL,
	[dispositionLastUpdateDate] [datetime] NULL,
	[towed] [int] NOT NULL,
	[Auctioned] [int] NOT NULL,
	[notes] [varchar](255) NULL,
	[dateEntered] [datetime] NULL,
	[notificationDate] [datetime] NULL,
	[lastUpdateDate] [datetime] NULL,
	[lastUserID] [int] NOT NULL,
	[ViolationInfo] [varchar](64) NULL,
	[LetterReturned] [int] NOT NULL,
 CONSTRAINT [Citations_PK] PRIMARY KEY CLUSTERED 
(
	[citationNumber] ASC,
	[citationDateTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Citations] ADD  DEFAULT (NULL) FOR [ownerFirstName]
GO

ALTER TABLE [dbo].[Citations] ADD  DEFAULT (NULL) FOR [ownerLastName]
GO

ALTER TABLE [dbo].[Citations] ADD  DEFAULT (NULL) FOR [ownerMiddleName]
GO

ALTER TABLE [dbo].[Citations] ADD  DEFAULT (NULL) FOR [ownerAddr1]
GO

ALTER TABLE [dbo].[Citations] ADD  DEFAULT (NULL) FOR [ownerAddr2]
GO

ALTER TABLE [dbo].[Citations] ADD  DEFAULT (NULL) FOR [ownerCity]
GO

ALTER TABLE [dbo].[Citations] ADD  DEFAULT (NULL) FOR [ownerStateID]
GO

ALTER TABLE [dbo].[Citations] ADD  DEFAULT (NULL) FOR [ownerPostalCode]
GO

ALTER TABLE [dbo].[Citations] ADD  DEFAULT (NULL) FOR [MakeID]
GO

ALTER TABLE [dbo].[Citations] ADD  DEFAULT (NULL) FOR [ModelID]
GO

ALTER TABLE [dbo].[Citations] ADD  DEFAULT (NULL) FOR [licensePlateStateID]
GO

ALTER TABLE [dbo].[Citations] ADD  DEFAULT ((1)) FOR [dispositionID]
GO

ALTER TABLE [dbo].[Citations] ADD  DEFAULT ((0)) FOR [amtPaid]
GO

ALTER TABLE [dbo].[Citations] ADD  DEFAULT (NULL) FOR [dispositionLastUpdateDate]
GO

ALTER TABLE [dbo].[Citations] ADD  DEFAULT ((0)) FOR [towed]
GO

ALTER TABLE [dbo].[Citations] ADD  DEFAULT ((0)) FOR [Auctioned]
GO

ALTER TABLE [dbo].[Citations] ADD  DEFAULT (NULL) FOR [notes]
GO

ALTER TABLE [dbo].[Citations] ADD  DEFAULT (NULL) FOR [dateEntered]
GO

ALTER TABLE [dbo].[Citations] ADD  DEFAULT (NULL) FOR [notificationDate]
GO

ALTER TABLE [dbo].[Citations] ADD  DEFAULT (NULL) FOR [lastUpdateDate]
GO

ALTER TABLE [dbo].[Citations] ADD  DEFAULT ((0)) FOR [lastUserID]
GO

ALTER TABLE [dbo].[Citations] ADD  DEFAULT (NULL) FOR [ViolationInfo]
GO

ALTER TABLE [dbo].[Citations]  WITH CHECK ADD  CONSTRAINT [Citations_DispositionID_FK] FOREIGN KEY([dispositionID])
REFERENCES [dbo].[Dispositions] ([DispositionID])
GO

ALTER TABLE [dbo].[Citations] CHECK CONSTRAINT [Citations_DispositionID_FK]
GO

ALTER TABLE [dbo].[Citations]  WITH CHECK ADD  CONSTRAINT [Citations_LPStateID_FK] FOREIGN KEY([licensePlateStateID])
REFERENCES [dbo].[States] ([StateID])
GO

ALTER TABLE [dbo].[Citations] CHECK CONSTRAINT [Citations_LPStateID_FK]
GO

ALTER TABLE [dbo].[Citations]  WITH CHECK ADD  CONSTRAINT [Citations_MakeID_FK] FOREIGN KEY([MakeID])
REFERENCES [dbo].[Makes] ([MakeID])
GO

ALTER TABLE [dbo].[Citations] CHECK CONSTRAINT [Citations_MakeID_FK]
GO

ALTER TABLE [dbo].[Citations]  WITH CHECK ADD  CONSTRAINT [Citations_OfficerID_FK] FOREIGN KEY([officerID])
REFERENCES [dbo].[Officers] ([OfficerID])
GO

ALTER TABLE [dbo].[Citations] CHECK CONSTRAINT [Citations_OfficerID_FK]
GO

ALTER TABLE [dbo].[Citations]  WITH CHECK ADD  CONSTRAINT [Citations_ownerStateID_FK] FOREIGN KEY([ownerStateID])
REFERENCES [dbo].[States] ([StateID])
GO

ALTER TABLE [dbo].[Citations] CHECK CONSTRAINT [Citations_ownerStateID_FK]
GO

ALTER TABLE [dbo].[Citations]  WITH CHECK ADD  CONSTRAINT [Citations_ViolationID_FK] FOREIGN KEY([violationID])
REFERENCES [dbo].[Violations] ([ViolationID])
GO

ALTER TABLE [dbo].[Citations] CHECK CONSTRAINT [Citations_ViolationID_FK]
GO

ALTER TABLE [dbo].[Citations]  WITH CHECK ADD  CONSTRAINT [Districts_DistrictdID_FK] FOREIGN KEY([DistrictID])
REFERENCES [dbo].[Districts] ([DistrictID])
GO

ALTER TABLE [dbo].[Citations] CHECK CONSTRAINT [Districts_DistrictdID_FK]
GO


