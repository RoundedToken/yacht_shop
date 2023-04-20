export function langParser(lang) {
    return lang === 'rus' ? 'Name' : lang === 'eng' ? 'NameENG' : lang === 'est' ? 'NameEST' : null;
}
