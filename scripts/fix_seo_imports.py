import os
import re

def get_react_files_to_fix():
    # From the previous grep command
    return [
        "src/react_pages/LandingIndex.tsx",
        "src/react_pages/ObrigadoNewsletter.tsx",
        "src/react_pages/PoliticaDePrivacidade.tsx",
        "src/react_pages/ThankYou.tsx",
        "src/react_pages/downloads/ChecklistMagalu.tsx",
        "src/react_pages/downloads/ChecklistVisibilidade.tsx",
        "src/react_pages/downloads/ComparativoMarketplaces.tsx",
        "src/react_pages/downloads/GuiaAmazon.tsx",
        "src/react_pages/downloads/GuiaFba.tsx",
        "src/react_pages/downloads/GuiaMercadoLivre.tsx",
        "src/react_pages/downloads/GuiaShopee.tsx",
        "src/react_pages/downloads/WhitepaperMarketing.tsx",
        "src/react_pages/landing/LandingPage.tsx"
    ]

def get_astro_path(react_path):
    # Convert react path to astro path (e.g. src/react_pages/ThankYou.tsx -> src/pages/thank-you.astro)
    base_name = os.path.basename(react_path).replace('.tsx', '')
    # simple kebab case conversion
    kebab_name = re.sub(r'(?<!^)(?=[A-Z])', '-', base_name).lower()

    if 'downloads' in react_path:
        return f"src/pages/downloads/{kebab_name}.astro"
    if 'landing' in react_path:
        return f"src/pages/landing/{kebab_name}.astro"

    return f"src/pages/{kebab_name}.astro"


def fix_files():
    files_to_fix = get_react_files_to_fix()
    for react_path in files_to_fix:
        astro_path = get_astro_path(react_path)

        with open(react_path, 'r') as f:
            react_content = f.read()

        title_match = re.search(r'title="([^"]+)"', react_content)
        description_match = re.search(r'description="([^"]+)"', react_content)
        no_index = 'noIndex' in react_content

        if not title_match or not description_match:
            print(f"Could not find title or description in {react_path}")
            continue

        title = title_match.group(1)
        description = description_match.group(1)

        # Update Astro file
        if os.path.exists(astro_path):
            with open(astro_path, 'r') as f:
                astro_content = f.read()

            # Add SEO component
            new_astro_content = astro_content.replace(
                '<Layout >',
                f'<Layout title={{{repr(title)}}}>\\n    <SEO\\n        title={{{repr(title)}}}\\n        description={{{repr(description)}}}\\n        {"noIndex" if no_index else ""}\\n    />'
            )
            # A bit of a hack to get the formatting right
            new_astro_content = new_astro_content.replace('\\n', '\n')

            # Add imports
            new_astro_content = new_astro_content.replace(
                '---',
                '---\\nimport SEO from \'../components/SEO.astro\';'
            )
            new_astro_content = new_astro_content.replace('\\n', '\n')


            with open(astro_path, 'w') as f:
                f.write(new_astro_content)
        else:
            print(f"Astro file not found: {astro_path}")


        # Update React file
        # Remove SEO component and useBreadcrumbs hook
        new_react_content = re.sub(r'import SEO from "@/components/SEO";\n?', '', react_content)
        new_react_content = re.sub(r'import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";\n?', '', new_react_content)
        new_react_content = re.sub(r'const breadcrumbs = useBreadcrumbs\(\);\n?', '', new_react_content)
        new_react_content = re.sub(r'<SEO[^>]*/>\n?', '', new_react_content, flags=re.DOTALL)


        with open(react_path, 'w') as f:
            f.write(new_react_content)

        print(f"Fixed {react_path} and {astro_path}")


if __name__ == "__main__":
    fix_files()
