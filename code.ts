// This file holds the main code for the plugin. It has access to the *document*.
// You can access browser APIs such as the network by creating a UI which contains
// a full browser environment (see documentation).
// Runs this code if the plugin is run in Figma
if (figma.editorType === "figma") {
  // This plugin will open a window to prompt the user to enter a number, and
  // it will then create that many rectangles on the screen.

  // This shows the HTML page in "ui.html".
  figma.showUI(__html__, { width: 350, height: 640 });

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

    // Create random text string id
    if (msg.type === "create-text") {
      const nodes: SceneNode[] = [];

      for (let i = 0; i < msg.count; i++) {
        const characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        function generateString(length) {
          let result = " ";
          const charactersLength = characters.length;
          for (let i = 0; i < length; i++) {
            result += characters.charAt(
              Math.floor(Math.random() * charactersLength)
            );
          }
          return result;
        }
        const text = figma.createText();
        text.characters = generateString(24);
        text.y = i * 72;
        text.fontSize = 24;
        text.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
        figma.currentPage.appendChild(text);
        nodes.push(text);
      }
      figma.currentPage.selection = nodes;
      figma.viewport.scrollAndZoomIntoView(nodes);
    }
    // Update random span id
    if (msg.type === "change-text") {
      for (const node of figma.currentPage.selection) {
        if ("characters" in node) {
          const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          function generateUpdate(length) {
            let result = "";
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
              result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
              );
            }
            return result;
          }

          node.characters = generateUpdate(24);
        }
      }
    }
    // Update duration
    if (msg.type === "change-duration") {
      // Check if something is selected
      if (figma.currentPage.selection.length === 0) {
        // if not, show a message
        figma.notify("Select a text object to convert it", { timeout: 5 });
      }
      // if it is not a text object, show a message
      const nodes = figma.currentPage.selection.filter(function (node) {
        return node.type === "TEXT";
      }) as Array<TextNode>;
      if (nodes.length === 0) {
        figma.notify("Select a text object to convert it", { timeout: 5 });
        return;
      }
      for (const node of figma.currentPage.selection) {
        if ("characters" in node) {
          const characters = "123456789";
          function generateDuration(length) {
            let result = "";
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
              result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
              );
            }
            return result;
          }

          node.characters =
            generateDuration(1) + "," + generateDuration(3) + " ms";
        }
      }
    }

    // Update percentage
    if (msg.type === "change-percentage") {
      // Check if something is selected
      if (figma.currentPage.selection.length === 0) {
        // if not, show a message
        figma.notify("Select a text object to convert it", { timeout: 5 });
      }
      // if it is not a text object, show a message
      const nodes = figma.currentPage.selection.filter(function (node) {
        return node.type === "TEXT";
      }) as Array<TextNode>;
      if (nodes.length === 0) {
        figma.notify("Select a text object to convert it", { timeout: 5 });
        return;
      }
      for (const node of figma.currentPage.selection) {
        if ("characters" in node) {
          const characters = "456789";
          function generatePecentage(length) {
            let result = "";
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
              result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
              );
            }
            return result;
          }

          node.characters = generatePecentage(1) + "0%";
        }
      }
    }

    // Update severity
    if (msg.type === "change-severity") {
      // Check if something is selected
      if (figma.currentPage.selection.length === 0) {
        // if not, show a message
        figma.notify("Select a text object to convert it", { timeout: 5 });
      }
      // if it is not a text object, show a message
      const nodes = figma.currentPage.selection.filter(function (node) {
        return node.type === "TEXT";
      }) as Array<TextNode>;
      if (nodes.length === 0) {
        figma.notify("Select a text object to convert it", { timeout: 5 });
        return;
      }
      for (const node of figma.currentPage.selection) {
        if ("characters" in node) {
          const characters = "236789";
          function generateSeverity(length) {
            let result = "";
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
              result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
              );
            }
            return result;
          }

          node.characters = generateSeverity(2);
        }
      }
    }

    // Update tpm
    if (msg.type === "change-tpm") {
      // Check if something is selected
      if (figma.currentPage.selection.length === 0) {
        // if not, show a message
        figma.notify("Select a text object to convert it", { timeout: 5 });
      }
      // if it is not a text object, show a message
      const nodes = figma.currentPage.selection.filter(function (node) {
        return node.type === "TEXT";
      }) as Array<TextNode>;
      if (nodes.length === 0) {
        figma.notify("Select a text object to convert it", { timeout: 5 });
        return;
      }
      for (const node of figma.currentPage.selection) {
        if ("characters" in node) {
          const characters = "456789";
          function generateTpm(length) {
            let result = "";
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
              result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
              );
            }
            return result;
          }

          node.characters = generateTpm(2) + "." + generateTpm(1) + " tpm";
        }
      }
    }

    // Update date
    if (msg.type === "change-date") {
      // Check if something is selected
      if (figma.currentPage.selection.length === 0) {
        // if not, show a message
        figma.notify("Select a text object to convert it", { timeout: 5 });
      }
      // if it is not a text object, show a message
      const nodes = figma.currentPage.selection.filter(function (node) {
        return node.type === "TEXT";
      }) as Array<TextNode>;
      if (nodes.length === 0) {
        figma.notify("Select a text object to convert it", { timeout: 5 });
        return;
      }
      for (const node of figma.currentPage.selection) {
        if ("characters" in node) {
          function randomDate(start, end) {
            return new Date(
              start.getTime() +
                Math.random() * (end.getTime() - start.getTime())
            );
          }
          // need to fix the correct locale, not working for some reason
          node.characters = randomDate(
            new Date(2016, 0, 1),
            new Date()
          ).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            weekday: "long",
          });
        }
      }
    }

    //Update random trace
    if (msg.type === "change-trace") {
      // Check if something is selected
      if (figma.currentPage.selection.length === 0) {
        // if not, show a message
        figma.notify("Select a text object to convert it", { timeout: 5 });
      }
      // if it is not a text object, show a message
      const nodes = figma.currentPage.selection.filter(function (node) {
        return node.type === "TEXT";
      }) as Array<TextNode>;
      if (nodes.length === 0) {
        figma.notify("Select a text object to convert it", { timeout: 5 });
        return;
      }
      for (const node of figma.currentPage.selection) {
        if ("characters" in node) {
          const service = [
            "/",
            "/cart",
            "/place-order",
            "GET /api/user/",
            "/product/:id",
            "/cart/checkout/",
            "/product/OLJSDSKHSDSD",
            "Click - div",
            "/product/L9ECAV7KIM",
            "/product/KJLASDJKLSA",
            "GET /user",
            "POST /user",
          ];
          const randomService = Math.floor(Math.random() * service.length);

          node.characters = service[randomService];
        }
      }
    }

    //Update random service
    if (msg.type === "change-service") {
      // Check if something is selected
      if (figma.currentPage.selection.length === 0) {
        // if not, show a message
        figma.notify("Select a text object to convert it", { timeout: 5 });
      }
      // if it is not a text object, show a message
      const nodes = figma.currentPage.selection.filter(function (node) {
        return node.type === "TEXT";
      }) as Array<TextNode>;
      if (nodes.length === 0) {
        figma.notify("Select a text object to convert it", { timeout: 5 });
        return;
      }
      for (const node of figma.currentPage.selection) {
        if ("characters" in node) {
          const service = [
            "advertService",
            "productCatalogService",
            "recommendationService",
            "frontend-rum",
            "frontend-node",
            "cartService",
            "shippingService",
            "checkoutService",
            "paymentService",
            "emailService",
            "addressValidationService",
            "billingService",
            "frontend-IOS",
          ];
          const randomService = Math.floor(Math.random() * service.length);

          node.characters = service[randomService];
        }
      }
    }

    //Update random health status
    if (msg.type === "change-health") {
      // Check if something is selected
      if (figma.currentPage.selection.length === 0) {
        // if not, show a message
        figma.notify("Select a text object to convert it", { timeout: 5 });
        return;
      }
      // if it is not a text object, show a message
      const nodes = figma.currentPage.selection.filter(function (node) {
        return node.type === "TEXT";
      }) as Array<TextNode>;
      if (nodes.length === 0) {
        figma.notify("Select a text object to convert it", { timeout: 5 });
        return;
      }

      for (const node of figma.currentPage.selection) {
        if ("characters" in node) {
          const service = ["Healthy", "Unhealthy", "Critical", "Unknown"];
          const randomService = Math.floor(Math.random() * service.length);

          node.characters = service[randomService];
        }
      }
    }

    //Update random monitor
    if (msg.type === "change-monitor") {
      // Check if something is selected
      if (figma.currentPage.selection.length === 0) {
        // if not, show a message
        figma.notify("Select a text object to convert it", { timeout: 5 });
      }
      // if it is not a text object, show a message
      const nodes = figma.currentPage.selection.filter(function (node) {
        return node.type === "TEXT";
      }) as Array<TextNode>;
      if (nodes.length === 0) {
        figma.notify("Select a text object to convert it", { timeout: 5 });
        return;
      }
      for (const node of figma.currentPage.selection) {
        if ("characters" in node) {
          const service = [
            "http://frontend-js:3000",
            "https://github.com",
            "icmp://github.com",
            "tcp://10.40.20.160:400",
            "tcp://40.10.20.5:11000",
            "tcp://20.1.9.200:6379",
            "tcp://40.10.5.155:3000",
            "tcp://10.40.2.154:5000",
          ];
          const randomService = Math.floor(Math.random() * service.length);

          node.characters = service[randomService];
        }
      }
    }
  };

  // // Cancel and close the pop up
  // else msg.type === "cancel";
  // {
  //   figma.closePlugin();
  // }
  // // Make sure to close the plugin when you're done. Otherwise the plugin will
  // // keep running, which shows the cancel button at the bottom of the screen.
  // figma.closePlugin();
}
