USE [ParkingCitations]
GO

/****** Object:  Table [dbo].[Dispositions]    Script Date: 4/1/2025 1:01:13 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Dispositions](
	[DispositionID] [int] NOT NULL,
	[Description] [varchar](255) NOT NULL,
 CONSTRAINT [DispositionID_PK] PRIMARY KEY CLUSTERED 
(
	[DispositionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


