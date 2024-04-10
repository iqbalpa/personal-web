-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT[],
    "references" TEXT[],

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
