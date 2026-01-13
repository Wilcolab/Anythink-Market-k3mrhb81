function toKebabCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Insert hyphens before uppercase letters
        .replace(/[^a-z0-9-]/g, '') // Remove special characters
        .toLowerCase(); // Convert to lowercase
}