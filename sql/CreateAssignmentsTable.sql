USE [ParkingCitations]
GO

/****** Object:  Table [dbo].[Assignments]    Script Date: 4/1/2025 1:04:48 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Assignments](
	[AssignmentID] [int] NOT NULL,
	[Description] [varchar](255) NOT NULL,
 CONSTRAINT [AssignmentID_PK] PRIMARY KEY CLUSTERED 
(
	[AssignmentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


