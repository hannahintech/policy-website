#!/usr/bin/env python3
import re
import sys
from pathlib import Path

def format_pb_sections(text: str) -> str:
    pattern = re.compile(
        r'(?<!#)\*\*PB(\d{3})\*\*\s+((?:[A-Z][a-z]+(?:\s+|$))+)(.*?)(?=(\*\*PB|\Z))',
        re.DOTALL
    )

    def replacer(match):
        number = match.group(1)
        title = match.group(2).strip()
        body = match.group(3).strip().replace('\n', ' ').strip()
        return f"""
### PB{number} - {title}

{body}
"""

    return pattern.sub(replacer, text)

def main():
    if len(sys.argv) < 2:
        print("Usage: python format-philosophical-basis.py <file.mdx>", file=sys.stderr)
        sys.exit(1)

    input_path = Path(sys.argv[1])
    if not input_path.exists():
        print(f"File not found: {input_path}", file=sys.stderr)
        sys.exit(1)

    original_text = input_path.read_text()
    formatted_text = format_pb_sections(original_text)

    # Backup
    backup_path = input_path.with_suffix(input_path.suffix + '.bak')
    backup_path.write_text(original_text)

    # Overwrite original
    input_path.write_text(formatted_text)
    print(f"✅ Formatted and saved: {input_path}\n📦 Backup saved as: {backup_path}")

if __name__ == '__main__':
    main()
