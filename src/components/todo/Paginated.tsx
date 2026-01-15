interface PaginationProps {
  currentPage: number;
  setCurrentPage: (value: number) => void;
  totalPages: number;
}
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Paginated = ({
  currentPage,
  setCurrentPage,
  totalPages,
}: PaginationProps) => {
  const totalPagesData = Array(totalPages).fill(null);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
              }
            }}
          />
        </PaginationItem>

        {totalPagesData.map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              onClick={() => setCurrentPage(index + 1)}
              isActive={index + 1 == currentPage}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext onClick={() => {
              if (currentPage < totalPages) {
                setCurrentPage(currentPage + 1);
              }
            }} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default Paginated;
