module.exports = {
  content: [
    '**/*.html',
    '**/*.njk',
    '**/*.liquid',
    '**/*.md'
  ],
  css: ['dist/uniform.min.css'],
  defaultExtractor: content => content.match(/[^<>"'`\s]*[^<>"'`\s:\.]/g) || []
}