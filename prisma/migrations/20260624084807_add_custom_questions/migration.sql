-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "customQuestions" TEXT[] DEFAULT ARRAY[]::TEXT[];
