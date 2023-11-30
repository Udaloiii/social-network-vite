import {useMemo} from "react";
import {PaginationType} from "@/components/pagination/Pagination";

type usePaginationType = Omit<PaginationType, "onPageChange">

export const DOTS = '...';
export const usePagination = ({
                                  totalCount,
                                  pageSize,
                                  siblingCount = 1,
                                  currentPage
                              }: usePaginationType) => {
    const paginationRange = useMemo(() => {
        // ф-ия, которая принимает значение start и end и возвращает массив с элементами от начала до конца
        const range = (start:number, end:number) => {
            const length = end - start + 1;

            // Создайте массив определенной длины и установите в нем элементы из начальное значение до конечного значения.
            return Array.from({length}, (_, idx) => idx + start);
        }
        const totalPageCount = Math.ceil(totalCount / pageSize);

        // Количество страниц определяется как siblingCount + firstPage + LastPage + currentPage + 2*DOTS
        const totalPageNumbers = siblingCount + 5;

        /*
          Case 1: Если количество страниц меньше номеров страниц, которые мы хотим отображать в нашем компоненте нумерации страниц, мы возвращаем диапазон [1..общее количество страниц]
        */
        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }

        /*
            Вычислите левый и правый одноуровневый индекс и убедитесь, что они находятся в пределах диапазона 1 и totalPageCount.
        */
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(
            currentPage + siblingCount,
            totalPageCount
        );

        /*
          Мы не показываем точки только тогда, когда между крайними значениями родственного элемента и пределами страницы нужно вставить только один номер страницы, т. е. 1 и totalPageCount. Следовательно, мы используем leftSiblingIndex > 2 и rightSiblingIndex < totalPageCount - 2
        */
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        /*
            Case 2: Нет левых точек для отображения, но должны отображаться правые точки
        */
        if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = 3 + 2 * siblingCount;
            const leftRange = range(1, leftItemCount);

            return [...leftRange, DOTS, totalPageCount];
        }

        /*
            Case 3: правые точки не отображаются, но отображаются левые точки
        */
        if (shouldShowLeftDots && !shouldShowRightDots) {

            const rightItemCount = 3 + 2 * siblingCount;
            const rightRange = range(
                totalPageCount - rightItemCount + 1,
                totalPageCount
            );
            return [firstPageIndex, DOTS, ...rightRange];
        }

        /*
            Case 4: Отображаются как левая, так и правая точки
        */
        if (shouldShowLeftDots && shouldShowRightDots) {
            const middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
    }, [totalCount, pageSize, siblingCount, currentPage]);

    return paginationRange;
};