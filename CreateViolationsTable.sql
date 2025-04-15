USE [ParkingCitations]
GO

/****** Object:  Table [dbo].[Violations]    Script Date: 2/17/2025 4:13:15 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Violations](
	[ViolationID] [int] NOT NULL,
	[Description] [varchar](255) NOT NULL,
	[AmtDue] [decimal](7, 2) NOT NULL,
	[PrevAmtDue] [decimal](7, 2) NOT NULL,
	[DateActive] [datetime] NOT NULL,
	[IsWarning] [bit] NOT NULL,
 CONSTRAINT [ViolationID_PK] PRIMARY KEY CLUSTERED 
(
	[ViolationID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


