from PIL import Image

def fix_logo(input_path, output_path):
    print(f"Processing {input_path}...")
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        r, g, b, a = item
        # Calculate saturation (simple version)
        mx = max(r, g, b)
        mn = min(r, g, b)
        diff = mx - mn
        
        # Checkerboard patterns are usually neutral colors (R~G~B) and bright
        # We target pixels where R, G, B are very close to each other and bright
        if diff < 20 and mx > 180:
            # Make it fully transparent
            new_data.append((0, 0, 0, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Fixed logo saved to {output_path}")

if __name__ == "__main__":
    fix_logo("public/images/gpt_logo.png", "public/images/gpt_logo.png")
