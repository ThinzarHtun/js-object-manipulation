# js-object-manipulation

This project processes a list of sculptures and calculates the length of each string value in the properties of each sculpture object. The result is an array where each entry corresponds to an object containing the lengths of string properties of each sculpture.

## Usage

1. Import the sculpture data from `data.js`. This file is expected to contain an array of sculpture objects.
2. Run the provided code to calculate the lengths of string properties within each sculpture object.

## Code Explanation

### Main Flow
- We import the `sculptureList` from the `data.js` file, which contains a list of sculpture objects.
- The code then iterates through the list using a `for` loop. For each sculpture, it calculates the length of each property (trimming whitespace first).
- The length of each string property is stored in an object and then added to the `sculptureListLengths` array.

### Output

The final result is printed to the console and will be an array of objects. Each object corresponds to a sculpture and contains the lengths of the string properties for that sculpture.

### Example Output:

```json
[
  { name: 26, artist: 20, description: 198, url: 31, alt: 90 },
  { name: 17, artist: 16, description: 188, url: 32, alt: 91 },
  { name: 16, artist: 19, description: 272, url: 31, alt: 98 },
  { name: 4, artist: 14, description: 169, url: 32, alt: 96 },
  { name: 9, artist: 20, description: 209, url: 32, alt: 98 },
  { name: 13, artist: 16, description: 235, url: 32, alt: 90 },
  { name: 9, artist: 21, description: 113, url: 32, alt: 94 },
  { name: 11, artist: 18, description: 254, url: 32, alt: 95 },
  { name: 15, artist: 14, description: 229, url: 31, alt: 92 },
  { name: 15, artist: 15, description: 332, url: 32, alt: 86 },
  { name: 7, artist: 15, description: 272, url: 32, alt: 98 },
  { name: 6, artist: 10, description: 78, url: 31, alt: 92 }
]
