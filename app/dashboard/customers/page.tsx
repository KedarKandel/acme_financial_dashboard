import Search from "@/app/ui/search";
import CustomersTable from "@/app/ui/customers/table";
import Pagination from "@/app/ui/invoices/pagination";
import { fetchCustomersPages } from "@/app/lib/data";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const params = await searchParams;

  const query = params.query || "";
  const currentPage = Number(params.page) || 1;

  const totalPages = await fetchCustomersPages(query);

  return (
    <div className="w-full">

      <CustomersTable
        query={query}
        currentPage={currentPage}
      />

      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}