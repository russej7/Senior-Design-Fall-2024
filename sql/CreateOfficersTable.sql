USE [ParkingCitations]
GO

/****** Object:  Table [dbo].[Officers]    Script Date: 2/17/2025 4:11:39 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Officers](
	[OfficerID] [int] NOT NULL,
	[BadgeNumber] [varchar](255) NOT NULL,
	[FirstName] [varchar](255) NOT NULL,
	[LastName] [varchar](255) NOT NULL,
	[MiddleName] [varchar](255) NULL,
	[RankID] [int] NOT NULL,
	[AssignmentID] [int] NOT NULL,
	[IsActive] [int] NOT NULL,
 CONSTRAINT [Officers_PK] PRIMARY KEY CLUSTERED 
(
	[OfficerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [Officers_BadgeNumber] UNIQUE NONCLUSTERED 
(
	[BadgeNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Officers]  WITH CHECK ADD  CONSTRAINT [Officers_AssignmentID_FK] FOREIGN KEY([AssignmentID])
REFERENCES [dbo].[Assignments] ([AssignmentID])
GO

ALTER TABLE [dbo].[Officers] CHECK CONSTRAINT [Officers_AssignmentID_FK]
GO

ALTER TABLE [dbo].[Officers]  WITH CHECK ADD  CONSTRAINT [Officers_RankID_FK] FOREIGN KEY([RankID])
REFERENCES [dbo].[Ranks] ([RankID])
GO

ALTER TABLE [dbo].[Officers] CHECK CONSTRAINT [Officers_RankID_FK]
GO


