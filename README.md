# KKsort

ไลบรารี TypeScript สำหรับอัลกอริทึมเรียงลำดับ (Sort) และค้นหา (Search)

## Demo / Playground

ลองเล่นและดูการทำงานแบบเดโมได้ที่ [https://kksort-web.vercel.app/](https://kksort-web.vercel.app/)

Feature ในเว็บเดโม:
- เลือกอัลกอริทึมที่ต้องการทดสอบ
- ป้อนข้อมูลและค่าเป้าหมายเองได้
- ดูผลลัพธ์การทำงานของแต่ละวิธีแบบทันที

## วิธีติดตั้ง

```bash
npm install @kktestdev/kksort
```

หรือ

```bash
pnpm add @kktestdev/kksort
```

## วิธีใช้งาน

### 1) Sort

```typescript
import { quickSort } from '@kktestdev/kksort/quick-sort';

const numbers = [5, 2, 8, 1, 9];
const sorted = quickSort(numbers, (a, b) => a - b);
console.log(sorted); // [1, 2, 5, 8, 9]
```

### 2) Search

```typescript
import { binarySearch } from '@kktestdev/kksort/binary';

const sortedNumbers = [1, 3, 5, 7, 9];
const index = binarySearch(sortedNumbers, 7);
console.log(index); // 3
```

### รูปแบบฟังก์ชัน

```typescript
// Sort
sortFn<T>(arr: T[], compareFn?: (a: T, b: T) => number): T[]

// Search
searchFn<T>(arr: T[], target: T, compareFn?: (a: T, b: T) => number): number
```

หมายเหตุ:
- ฟังก์ชัน Search จะคืนค่า `index` ที่หาเจอ หรือ `-1` ถ้าไม่เจอ
- ถ้าเป็นข้อมูล object ควรส่ง `compareFn` เอง

## รายละเอียดฟังก์ชัน + ข้อดี/ข้อเสีย

### Sorting Functions

| Func | Import | ข้อดี | ข้อเสีย | หมายเหตุ |
|---|---|---|---|---|
| `bubbleSort` | `@kktestdev/kksort/bubble` | เข้าใจง่าย, stable, เหมาะกับงานสอน | ช้า `O(n^2)` เมื่อข้อมูลใหญ่ | ไม่แก้ไข array ต้นฉบับ |
| `insertionSort` | `@kktestdev/kksort/insertion` | ดีมากกับข้อมูลเกือบเรียงแล้ว, stable | แย่กับข้อมูลใหญ่ (`O(n^2)`) | ไม่แก้ไข array ต้นฉบับ |
| `selectionSort` | `@kktestdev/kksort/selection` | โค้ดง่าย, swap น้อย | `O(n^2)` ทุกกรณี, ไม่ stable | แก้ไข array ต้นฉบับ |
| `mergeSort` | `@kktestdev/kksort/merge` | `O(n log n)` แน่นอน, stable | ใช้หน่วยความจำเพิ่ม `O(n)` | ไม่แก้ไข array ต้นฉบับ |
| `quickSort` | `@kktestdev/kksort/quick-sort` | เร็วในภาพรวม, เหมาะงานทั่วไป | แย่สุดอาจเป็น `O(n^2)` | ไม่แก้ไข array ต้นฉบับ |
| `heapSort` | `@kktestdev/kksort/heap` | `O(n log n)` แน่นอน, ใช้พื้นที่เพิ่มน้อย | ไม่ stable, มักช้ากว่า quick sort ในงานจริง | แก้ไข array ต้นฉบับ |

### Search Functions

| Func | Import | ข้อดี | ข้อเสีย | หมายเหตุ |
|---|---|---|---|---|
| `binarySearch` | `@kktestdev/kksort/binary` | เร็วมาก `O(log n)` | ต้องเป็นข้อมูลที่เรียงแล้วเท่านั้น | ไม่แก้ไข array ต้นฉบับ |
| `linearSearch` | `@kktestdev/kksort/linear` | ใช้ได้กับข้อมูลไม่เรียง | ช้าเมื่อข้อมูลใหญ่ (`O(n)`) | ไม่แก้ไข array ต้นฉบับ |
| `jumpSearch` | `@kktestdev/kksort/jump` | เร็วกว่า linear บนข้อมูลเรียง | ยังช้ากว่า binary | ต้องเป็นข้อมูลที่เรียงแล้ว |
| `quickSearch` | `@kktestdev/kksort/quick-search` | เฉลี่ยเร็วกับข้อมูลไม่เรียง | แย่สุด `O(n^2)`, มีการสลับตำแหน่งข้อมูล | แก้ไข array ต้นฉบับ |
