export function stringSort(a, b) {
    if (!a && !b)
        return 0;

    if (!a)
        return -1;

    if (!b)
        return 1;

    a += '';
    b += '';
    return a.localeCompare(b);
}
