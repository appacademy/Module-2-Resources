# Arrays

- Arrays are the most time and space efficient way to store data

Definition: An array is a sequence of elements of the same type, stored in a contiguous block of memory

Indexing formula (under the hood of .indexOf()): valueAddress = startAddress + index \* sizeof(dataType)

\*\* All three parts of this definition are required for O(1) indexing equation.

The reason that JavaScript arrays allow for different types is because they are
actually hash tables (we'll get to those soon).
They contain a sequence of pointers (memory addresses) and each element's type is interpreted at runtime.


