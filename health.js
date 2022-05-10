// This file holds the main code for the plugin. It has access to the *document*.
// You can access browser APIs such as the network by creating a UI which contains
// a full browser environment (see documentation).
// Runs this code if the plugin is run in Figma
if (figma.editorType === "figma") {
    // This plugin will open a window to prompt the user to enter a number, and
    // it will then create that many rectangles on the screen.
    // Calls to "parent.postMessage" from within the HTML page will trigger this
    // callback. The callback will be passed the "pluginMessage" property of the
    // posted message.
    figma.loadFontAsync({ family: "Inter", style: "Thin" });
    figma.loadFontAsync({ family: "Inter", style: "Extra Light" });
    figma.loadFontAsync({ family: "Inter", style: "Light" });
    figma.loadFontAsync({ family: "Inter", style: "Regular" });
    figma.loadFontAsync({ family: "Inter", style: "Medium" });
    figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
    figma.loadFontAsync({ family: "Inter", style: "Bold" });
    figma.loadFontAsync({ family: "Inter", style: "Extra Bold" });
    figma.loadFontAsync({ family: "Inter", style: "Black" });
    figma.loadFontAsync({ family: "Inter", style: "Thin Italic" });
    figma.loadFontAsync({ family: "Inter", style: "Extra Light Italic" });
    figma.loadFontAsync({ family: "Inter", style: "Light Italic" });
    figma.loadFontAsync({ family: "Inter", style: "Italic" });
    figma.loadFontAsync({ family: "Inter", style: "Medium Italic" });
    figma.loadFontAsync({ family: "Inter", style: "Semi Bold Italic" });
    figma.loadFontAsync({ family: "Inter", style: "Bold Italic" });
    figma.loadFontAsync({ family: "Inter", style: "Extra Bold Italic" });
    figma.loadFontAsync({ family: "Inter", style: "Black Italic" });
    figma.ui.onmessage = (msg) => {
        // One way of distinguishing between different types of messages sent from
        // your HTML page is to use an object with a "type" property like this.
        //Update random health status
        if (msg.type === "change-health") {
            for (const node of figma.currentPage.selection) {
                if ("characters" in node) {
                    const service = ["Healthy", "Unhealthy", "Critical", "Unknown"];
                    const randomService = Math.floor(Math.random() * service.length);
                    node.characters = service[randomService];
                }
            }
        }
        // // Make sure to close the plugin when you're done. Otherwise the plugin will
        // // keep running, which shows the cancel button at the bottom of the screen.
        figma.closePlugin();
    };
}
