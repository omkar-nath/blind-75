export default function anagramGroups(strs: string[]): string[][] {
  let map = new Map<string, string[]>();

  for (let currentStr of strs) {
    let current = Array.from(currentStr);
    current.sort();

    let key = current.join("");
    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key)!.push(currentStr);
  }

  return Array.from(map.values());
}

// Another way could be to use frequency array instead of sorting every key

function anagramGroups1(strs: string[]): string[][] {
  let map = new Map<string, string[]>();

  for (let currentStr of strs) {
    let freq = new Array(26).fill(0);
    for (let char of currentStr) {
      freq[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    let key = "";
    for (let i = 0; i < freq.length; i++) {
      key = "#";
      key += freq[i];
    }

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key)!.push(currentStr);
  }

  return Array.from(map.values());
}
