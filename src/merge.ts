export function merge(a: number[], b: number[], c: number[]): number[] {
    const temp: number[] = [];
    const result: number[] = [];
    const reverseC: number[] = [];

    let i = 0;
    let j = 0;
    let k = 0;
    let l = 0;

    for (let m = c.length; m > 0; m--) {
        reverseC.push(c[m - 1]!);
    }

    while (i < a.length && j < b.length) {
        if (a[i]! < b[j]!) {
            temp.push(a[i]!);
            i++;
        } else {
            temp.push(b[j]!);
            j++;
        }
    }
    while (i < a.length) {
        temp.push(a[i]!);
        i++;
    }
    while (j < b.length) {
        temp.push(b[j]!);
        j++;
    }

    while (k < reverseC.length && l < temp.length) {
        if (reverseC[k]! < temp[l]!) {
            result.push(reverseC[k]!);
            k++;
        } else {
            result.push(temp[l]!);
            l++;
        }
    }

    while (k < reverseC.length) {
        result.push(reverseC[k]!);
        k++;
    }

    while (l < temp.length) {
        result.push(temp[l]!);
        l++;
    }
    
    return result;
}