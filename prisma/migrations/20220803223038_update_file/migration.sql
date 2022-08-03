/*
  Warnings:

  - You are about to drop the column `destination` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `encoding` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `fieldname` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `originalname` on the `File` table. All the data in the column will be lost.
  - Added the required column `originalFilename` to the `File` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "File" DROP COLUMN "destination",
DROP COLUMN "encoding",
DROP COLUMN "fieldname",
DROP COLUMN "originalname",
ADD COLUMN     "originalFilename" TEXT NOT NULL;
