-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_procuctId_fkey";

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_procuctId_fkey" FOREIGN KEY ("procuctId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
