USE [ParkingCitations]
GO

/****** Object:  Table [dbo].[Makes]    Script Date: 2/17/2025 4:11:13 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Makes](
	[MakeID] [int] NOT NULL,
	[Description] [varchar](255) NOT NULL,
 CONSTRAINT [MAKEID_PK] PRIMARY KEY CLUSTERED 
(
	[MakeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


