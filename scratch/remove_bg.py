from PIL import Image

def remove_background(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    # Get the background color from the corner
    bg_color = img.getpixel((5, 5))
    
    new_data = []
    # Tolerance for background removal (to handle slight color variations)
    tolerance = 15
    
    for item in datas:
        # Check if the pixel color is close to the background color
        is_bg = True
        for i in range(3): # Check R, G, B
            if abs(item[i] - bg_color[i]) > tolerance:
                is_bg = False
                break
        
        if is_bg:
            # Make it transparent
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)

    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Transparent logo saved to {output_path}")

if __name__ == "__main__":
    remove_background("public/images/logo.png", "public/images/logo.png")
