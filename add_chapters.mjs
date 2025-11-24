import { readFileSync, writeFileSync } from 'fs';

// Chapter mappings from ISTQB v4.0
const chapterMap = {
    1: [1, 2, 3, 4, 5, 6, 7, 8, 46, 51, 61, 69, 75, 76, 81, 82, 87, 97, 98],
    2: [9, 10, 11, 12, 13, 14, 50, 52, 53, 62, 64, 65, 71, 78, 84, 85, 92],
    3: [15, 16, 17, 18, 41, 42, 79, 88],
    4: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 43, 44, 45, 48, 54, 66, 68, 70, 74, 80, 83, 89, 91, 93, 99],
    5: [30, 31, 32, 33, 34, 35, 36, 37, 38, 47, 55, 56, 58, 59, 60, 63, 72, 77, 90, 94, 95, 100],
    6: [39, 40, 49, 57, 67, 73, 86, 96]
};

// Create reverse mapping (id -> chapter)
const idToChapter = {};
Object.entries(chapterMap).forEach(([chapter, ids]) => {
    ids.forEach(id => {
        idToChapter[id] = parseInt(chapter);
    });
});

// Read the file
const filePath = './src/data/questions.js';
const content = readFileSync(filePath, 'utf-8');

// Add chapter property after 'id' property
let updated = content.replace(
    /(\{\s*\n\s*id:\s*(\d+),)/g,
    (match, group, id) => {
        const chapter = idToChapter[parseInt(id)];
        return `{\n        id: ${id},\n        chapter: ${chapter},`;
    }
);

// Write back
writeFileSync(filePath, updated, 'utf-8');
console.log('✓ Added chapter property to all questions');

// Verify distribution
const chapterCounts = {};
Object.values(idToChapter).forEach(ch => {
    chapterCounts[ch] = (chapterCounts[ch] || 0) + 1;
});
console.log('\nChapter distribution:');
Object.entries(chapterCounts).sort().forEach(([ch, count]) => {
    console.log(`  Chapter ${ch}: ${count} questions`);
});
