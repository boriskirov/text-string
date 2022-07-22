// This file holds the main code for the plugin. It has access to the *document*.
// You can access browser APIs such as the network by creating a UI which contains
// a full browser environment (see documentation).

// Runs this code if the plugin is run in Figma)
if (figma.command == "open-plugin") {
  // This plugin will open a window to prompt the user to enter a number, and
  // it will then create that many rectangles on the screen.

  // This shows the HTML page in "ui.html".
  figma.showUI(__html__, { width: 350, height: 640, themeColors: true });

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
  figma.loadFontAsync({ family: "Inter UI", style: "Thin" });
  figma.loadFontAsync({ family: "Inter UI", style: "Extra Light" });
  figma.loadFontAsync({ family: "Inter UI", style: "Light" });
  figma.loadFontAsync({ family: "Inter UI", style: "Regular" });
  figma.loadFontAsync({ family: "Inter UI", style: "Medium" });
  figma.loadFontAsync({ family: "Inter UI", style: "Semi Bold" });
  figma.loadFontAsync({ family: "Inter UI", style: "Bold" });
  figma.loadFontAsync({ family: "Inter UI", style: "Extra Bold" });
  figma.loadFontAsync({ family: "Inter UI", style: "Black" });
  figma.loadFontAsync({ family: "Inter UI", style: "Thin Italic" });
  figma.loadFontAsync({
    family: "Inter UI",
    style: "Extra Light Italic",
  });
  figma.loadFontAsync({ family: "Inter UI", style: "Light Italic" });
  figma.loadFontAsync({ family: "Inter UI", style: "Italic" });
  figma.loadFontAsync({ family: "Inter UI", style: "Medium Italic" });
  figma.loadFontAsync({
    family: "Inter UI",
    style: "Semi Bold Italic",
  });
  figma.loadFontAsync({ family: "Inter UI", style: "Bold Italic" });
  figma.loadFontAsync({
    family: "Inter",
    style: "Extra Bold Italic",
  });
  figma.loadFontAsync({ family: "Inter UI", style: "Black Italic" });
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

          node.characters = generatePecentage(1) + generatePecentage(1) + "%";
        }
      }
    }

    // Update severity
    if (msg.type === "change-severity") {
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
          const service = [
            "elastic-co-frontend",
            "apm-server",
            "filebeat",
            "frontend-rum",
            "frontend-node",
            "metricbeat",
            "opsbeans-python",
            "kibana",
            "heartbeat",
            "opbeans-go",
            "opbeans-dotnet",
            "opbeans-ruby",
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
    //Update random dependencyy
    if (msg.type === "change-dependency") {
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
          const dependency = [
            "elasticsearch",
            "postgresql",
            "redis",
            "sqlite",
            "h2",
            "h2",
            "h2/OPBEANS",
            "kibana",
            "adminconsole-backend",
            "metering",
            "allocator",
            "gcp-reporter",
            "constructor",
            "container-task-service",
            "zookeeper",
            "route-server",
            "client-observer",
          ];
          const randomDependency = Math.floor(
            Math.random() * dependency.length
          );

          node.characters = dependency[randomDependency];
        }
      }
    }
    //Update random error message
    if (msg.type === "change-error-message") {
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
          const errorMesssage = [
            "AssertionError: Bad luck!",
            "ValueError: Cannot use None as a query value",
            "Page Not Found: ['http://opbeans:3000/api/types/3']",
            "Page Not Found: ['http://opbeans:3000/api/types/3']",
            "JSONDecodeError: Expecting value: line 1 column 1 (char 0)",
            "OperationalError: connection to server at (10.40.6.217)",
            "Couldn't find Customer with 'id'=601",
            "Couldn't find Order with 'id'=178",
            "Couldn't find Customer without an ID",
            "Response status 404execution expired",
          ];
          const randomErrorMessage = Math.floor(
            Math.random() * errorMesssage.length
          );

          node.characters = errorMesssage[randomErrorMessage];
        }
      }
    }
    //Update random last seen
    if (msg.type === "change-last-seen") {
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
          const characters = "123456789";
          function generateLastSeen(length) {
            let result = "";
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
              result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
              );
            }
            return result;
          }

          const time = ["days", "hours", "minutes"];
          const randomLastSeen = Math.floor(Math.random() * time.length);
          node.characters =
            generateLastSeen(1) + " " + time[randomLastSeen] + " " + "ago";
        }
      }
    }

    //Update random transaction
    if (msg.type === "change-transaction") {
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
          const transaction = [
            "ProductDetail",
            "home",
            "BlogDetail",
            "VideoDetail",
            "downloadsRedesign",
            "DefaultDetail",
            "ProductVersion",
            "PastReleases1",
            "Click - a",
            "BlogPost",
            "Forms",
            "Click - span-reporter",
            "fullWidthOverview",
            "searchPage",
            "PricingRedesign",
            "Click - div",
            "Subscriptions",
            "FullWidthOverview",
            "Careers",
            "CourseDetail",
            "Blog",
          ];
          const randomTransaction = Math.floor(
            Math.random() * transaction.length
          );

          node.characters = transaction[randomTransaction];
        }
      }
    }

    //Update random error type
    if (msg.type === "change-error-type") {
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
          const errorType = [
            "ActiveRecord::RecordNotFound",
            "HTTP::ConnectionError",
            "BlogDTimeout::Erroretail",
            "ActiveRecord::ConnectionNotEstablished",
            "ActiveRecord::NoDatabaseError",
          ];
          const randomErrorType = Math.floor(Math.random() * errorType.length);

          node.characters = errorType[randomErrorType];
        }
      }
    }

    if (msg.type === "change-storage-size") {
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
          const characters = "123456789";
          function generateSize(length) {
            let result = "";
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
              result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
              );
            }
            return result;
          }

          node.characters = generateSize(3) + "." + generateSize(1) + " GB";
        }
      }
    }
  };
} else if (figma.command == "health") {
  async function createHealth(): Promise<string | undefined> {
    // Inter is the font that objects will be created in Figma.
    // We need to wait for fonts to load before creating text using them.
    await figma.loadFontAsync({ family: "Inter", style: "Thin" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Black" });
    await figma.loadFontAsync({ family: "Inter", style: "Thin Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Light Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Light Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Bold Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Black Italic" });
    if (figma.currentPage.selection.length === 0) {
      // if not, show a message
      figma.closePlugin("Select a text object to convert it");
      return;
    } // if it is not a text object, show a message
    const nodes = figma.currentPage.selection.filter(function (node) {
      return node.type === "TEXT";
    }) as Array<TextNode>;
    if (nodes.length === 0) {
      figma.closePlugin("Select a text object to convert it");
      return;
    } else {
      for (const node of figma.currentPage.selection) {
        if ("characters" in node) {
          const service = ["Healthy", "Unhealthy", "Critical", "Unknown"];
          const randomService = Math.floor(Math.random() * service.length);

          node.characters = service[randomService];
        }
      }
    }
  }

  createHealth().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
} else if (figma.command == "service") {
  async function createService(): Promise<string | undefined> {
    // Inter is the font that objects will be created in Figma.
    // We need to wait for fonts to load before creating text using them.
    await figma.loadFontAsync({ family: "Inter", style: "Thin" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Black" });
    await figma.loadFontAsync({ family: "Inter", style: "Thin Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Light Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Light Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Bold Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Black Italic" });
    // Make sure the selection is a single piece of text before proceeding.

    if (figma.currentPage.selection.length === 0) {
      // if not, show a message
      figma.closePlugin("Select a text object to convert it");
      return;
    } // if it is not a text object, show a message
    const nodes = figma.currentPage.selection.filter(function (node) {
      return node.type === "TEXT";
    }) as Array<TextNode>;
    if (nodes.length === 0) {
      figma.closePlugin("Select a text object to convert it");
      return;
    } else {
      for (const node of figma.currentPage.selection) {
        if (figma.currentPage.selection.length === 0) {
          // if not, show a message
          figma.closePlugin("Select a text object to convert it");
          return;
        }
        // if it is not a text object, show a message
        const nodes = figma.currentPage.selection.filter(function (node) {
          return node.type === "TEXT";
        }) as Array<TextNode>;
        if (nodes.length === 0) {
          figma.closePlugin("Select a text object to convert it");
          return;
        }
        for (const node of figma.currentPage.selection) {
          if ("characters" in node) {
            const service = [
              "elastic-co-frontend",
              "apm-server",
              "filebeat",
              "frontend-rum",
              "frontend-node",
              "metricbeat",
              "opsbeans-python",
              "kibana",
              "heartbeat",
              "opbeans-go",
              "opbeans-dotnet",
              "opbeans-ruby",
            ];
            const randomService = Math.floor(Math.random() * service.length);

            node.characters = service[randomService];
          }
        }
      }
    }
  }

  createService().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
} else if (figma.command == "trace") {
  async function createTrace(): Promise<string | undefined> {
    // Inter is the font that objects will be created in Figma.
    // We need to wait for fonts to load before creating text using them.
    await figma.loadFontAsync({ family: "Inter", style: "Thin" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Black" });
    await figma.loadFontAsync({ family: "Inter", style: "Thin Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Light Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Light Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Bold Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Black Italic" });
    // Make sure the selection is a single piece of text before proceeding.

    if (figma.currentPage.selection.length === 0) {
      // if not, show a message
      figma.closePlugin("Select a text object to convert it");
      return;
    } // if it is not a text object, show a message
    const nodes = figma.currentPage.selection.filter(function (node) {
      return node.type === "TEXT";
    }) as Array<TextNode>;
    if (nodes.length === 0) {
      figma.closePlugin("Select a text object to convert it");
      return;
    } else {
      for (const node of figma.currentPage.selection) {
        if (figma.currentPage.selection.length === 0) {
          // if not, show a message
          figma.closePlugin("Select a text object to convert it");
          return;
        }
        // if it is not a text object, show a message
        const nodes = figma.currentPage.selection.filter(function (node) {
          return node.type === "TEXT";
        }) as Array<TextNode>;
        if (nodes.length === 0) {
          figma.closePlugin("Select a text object to convert it");
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
            const randomTrace = Math.floor(Math.random() * service.length);

            node.characters = service[randomTrace];
          }
        }
      }
    }
  }

  createTrace().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
} else if (figma.command == "duration") {
  async function createDuration(): Promise<string | undefined> {
    // Inter is the font that objects will be created in Figma.
    // We need to wait for fonts to load before creating text using them.
    await figma.loadFontAsync({ family: "Inter", style: "Thin" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Black" });
    await figma.loadFontAsync({ family: "Inter", style: "Thin Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Light Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Light Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Bold Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Black Italic" });
    // Make sure the selection is a single piece of text before proceeding.

    if (figma.currentPage.selection.length === 0) {
      // if not, show a message
      figma.closePlugin("Select a text object to convert it");
      return;
    } // if it is not a text object, show a message
    const nodes = figma.currentPage.selection.filter(function (node) {
      return node.type === "TEXT";
    }) as Array<TextNode>;
    if (nodes.length === 0) {
      figma.closePlugin("Select a text object to convert it");
      return;
    } else {
      for (const node of figma.currentPage.selection) {
        if (figma.currentPage.selection.length === 0) {
          // if not, show a message
          figma.closePlugin("Select a text object to convert it");
          return;
        }
        // if it is not a text object, show a message
        const nodes = figma.currentPage.selection.filter(function (node) {
          return node.type === "TEXT";
        }) as Array<TextNode>;
        if (nodes.length === 0) {
          figma.closePlugin("Select a text object to convert it");
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
    }
  }

  createDuration().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
} else if (figma.command == "percentage") {
  async function createPercentage(): Promise<string | undefined> {
    // Inter is the font that objects will be created in Figma.
    // We need to wait for fonts to load before creating text using them.
    await figma.loadFontAsync({ family: "Inter", style: "Thin" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Black" });
    await figma.loadFontAsync({ family: "Inter", style: "Thin Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Light Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Light Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Bold Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Black Italic" });
    // Make sure the selection is a single piece of text before proceeding.

    if (figma.currentPage.selection.length === 0) {
      // if not, show a message
      figma.closePlugin("Select a text object to convert it");
      return;
    } // if it is not a text object, show a message
    const nodes = figma.currentPage.selection.filter(function (node) {
      return node.type === "TEXT";
    }) as Array<TextNode>;
    if (nodes.length === 0) {
      figma.closePlugin("Select a text object to convert it");
      return;
    } else {
      for (const node of figma.currentPage.selection) {
        if (figma.currentPage.selection.length === 0) {
          // if not, show a message
          figma.closePlugin("Select a text object to convert it");
          return;
        }
        // if it is not a text object, show a message
        const nodes = figma.currentPage.selection.filter(function (node) {
          return node.type === "TEXT";
        }) as Array<TextNode>;
        if (nodes.length === 0) {
          figma.closePlugin("Select a text object to convert it");
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

            node.characters = generatePecentage(1) + generatePecentage(1) + "%";
          }
        }
      }
    }
  }

  createPercentage().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
} else if (figma.command == "throughput") {
  async function createThroughput(): Promise<string | undefined> {
    // Inter is the font that objects will be created in Figma.
    // We need to wait for fonts to load before creating text using them.
    await figma.loadFontAsync({ family: "Inter", style: "Thin" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Black" });
    await figma.loadFontAsync({ family: "Inter", style: "Thin Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Light Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Light Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Bold Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Black Italic" });
    // Make sure the selection is a single piece of text before proceeding.

    if (figma.currentPage.selection.length === 0) {
      // if not, show a message
      figma.closePlugin("Select a text object to convert it");
      return;
    } // if it is not a text object, show a message
    const nodes = figma.currentPage.selection.filter(function (node) {
      return node.type === "TEXT";
    }) as Array<TextNode>;
    if (nodes.length === 0) {
      figma.closePlugin("Select a text object to convert it");
      return;
    } else {
      for (const node of figma.currentPage.selection) {
        if (figma.currentPage.selection.length === 0) {
          // if not, show a message
          figma.closePlugin("Select a text object to convert it");
          return;
        }
        // if it is not a text object, show a message
        const nodes = figma.currentPage.selection.filter(function (node) {
          return node.type === "TEXT";
        }) as Array<TextNode>;
        if (nodes.length === 0) {
          figma.closePlugin("Select a text object to convert it");
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
    }
  }

  createThroughput().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
} else if (figma.command == "date") {
  async function createDate(): Promise<string | undefined> {
    // Inter is the font that objects will be created in Figma.
    // We need to wait for fonts to load before creating text using them.
    await figma.loadFontAsync({ family: "Inter", style: "Thin" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Black" });
    await figma.loadFontAsync({ family: "Inter", style: "Thin Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Light Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Light Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Bold Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Black Italic" });
    // Make sure the selection is a single piece of text before proceeding.

    if (figma.currentPage.selection.length === 0) {
      // if not, show a message
      figma.closePlugin("Select a text object to convert it");
      return;
    } // if it is not a text object, show a message
    const nodes = figma.currentPage.selection.filter(function (node) {
      return node.type === "TEXT";
    }) as Array<TextNode>;
    if (nodes.length === 0) {
      figma.closePlugin("Select a text object to convert it");
      return;
    } else {
      for (const node of figma.currentPage.selection) {
        if (figma.currentPage.selection.length === 0) {
          // if not, show a message
          figma.closePlugin("Select a text object to convert it");
          return;
        }
        // if it is not a text object, show a message
        const nodes = figma.currentPage.selection.filter(function (node) {
          return node.type === "TEXT";
        }) as Array<TextNode>;
        if (nodes.length === 0) {
          figma.closePlugin("Select a text object to convert it");
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
    }
  }

  createDate().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
} else if (figma.command == "severity") {
  async function createSeverity(): Promise<string | undefined> {
    // Inter is the font that objects will be created in Figma.
    // We need to wait for fonts to load before creating text using them.
    await figma.loadFontAsync({ family: "Inter", style: "Thin" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Black" });
    await figma.loadFontAsync({ family: "Inter", style: "Thin Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Light Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Light Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Bold Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Black Italic" });
    // Make sure the selection is a single piece of text before proceeding.

    if (figma.currentPage.selection.length === 0) {
      // if not, show a message
      figma.closePlugin("Select a text object to convert it");
      return;
    } // if it is not a text object, show a message
    const nodes = figma.currentPage.selection.filter(function (node) {
      return node.type === "TEXT";
    }) as Array<TextNode>;
    if (nodes.length === 0) {
      figma.closePlugin("Select a text object to convert it");
      return;
    } else {
      for (const node of figma.currentPage.selection) {
        if (figma.currentPage.selection.length === 0) {
          // if not, show a message
          figma.closePlugin("Select a text object to convert it");
          return;
        }
        // if it is not a text object, show a message
        const nodes = figma.currentPage.selection.filter(function (node) {
          return node.type === "TEXT";
        }) as Array<TextNode>;
        if (nodes.length === 0) {
          figma.closePlugin("Select a text object to convert it");
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
    }
  }

  createSeverity().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
} else if (figma.command == "span-trace-id") {
  async function createID(): Promise<string | undefined> {
    // Inter is the font that objects will be created in Figma.
    // We need to wait for fonts to load before creating text using them.
    await figma.loadFontAsync({ family: "Inter", style: "Thin" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Black" });
    await figma.loadFontAsync({ family: "Inter", style: "Thin Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Light Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Light Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Bold Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Black Italic" });
    // Make sure the selection is a single piece of text before proceeding.

    if (figma.currentPage.selection.length === 0) {
      // if not, show a message
      figma.closePlugin("Select a text object to convert it");
      return;
    } // if it is not a text object, show a message
    const nodes = figma.currentPage.selection.filter(function (node) {
      return node.type === "TEXT";
    }) as Array<TextNode>;
    if (nodes.length === 0) {
      figma.closePlugin("Select a text object to convert it");
      return;
    } else {
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
  }

  createID().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
} else if (figma.command == "monitor") {
  async function createMonitor(): Promise<string | undefined> {
    // Inter is the font that objects will be created in Figma.
    // We need to wait for fonts to load before creating text using them.
    await figma.loadFontAsync({ family: "Inter", style: "Thin" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Black" });
    await figma.loadFontAsync({ family: "Inter", style: "Thin Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Light Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Light Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Bold Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Black Italic" });
    // Make sure the selection is a single piece of text before proceeding.

    if (figma.currentPage.selection.length === 0) {
      // if not, show a message
      figma.closePlugin("Select a text object to convert it");
      return;
    } // if it is not a text object, show a message
    const nodes = figma.currentPage.selection.filter(function (node) {
      return node.type === "TEXT";
    }) as Array<TextNode>;
    if (nodes.length === 0) {
      figma.closePlugin("Select a text object to convert it");
      return;
    } else {
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
  }

  createMonitor().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
} else if (figma.command == "dependency") {
  async function createDependency(): Promise<string | undefined> {
    // Inter is the font that objects will be created in Figma.
    // We need to wait for fonts to load before creating text using them.
    await figma.loadFontAsync({ family: "Inter", style: "Thin" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Black" });
    await figma.loadFontAsync({ family: "Inter", style: "Thin Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Light Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Light Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Bold Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Black Italic" });
    // Make sure the selection is a single piece of text before proceeding.

    if (figma.currentPage.selection.length === 0) {
      // if not, show a message
      figma.closePlugin("Select a text object to convert it");
      return;
    } // if it is not a text object, show a message
    const nodes = figma.currentPage.selection.filter(function (node) {
      return node.type === "TEXT";
    }) as Array<TextNode>;
    if (nodes.length === 0) {
      figma.closePlugin("Select a text object to convert it");
      return;
    } else {
      for (const node of figma.currentPage.selection) {
        if ("characters" in node) {
          const service = [
            "elasticsearch",
            "postgresql",
            "redis",
            "sqlite",
            "h2",
            "h2",
            "h2/OPBEANS",
            "kibana",
            "adminconsole-backend",
            "metering",
            "allocator",
            "gcp-reporter",
            "constructor",
            "container-task-service",
            "zookeeper",
            "route-server",
            "client-observer",
          ];
          const randomService = Math.floor(Math.random() * service.length);

          node.characters = service[randomService];
        }
      }
    }
  }

  createDependency().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
} else if (figma.command == "error-message") {
  async function createErrorMessage(): Promise<string | undefined> {
    // Inter is the font that objects will be created in Figma.
    // We need to wait for fonts to load before creating text using them.
    await figma.loadFontAsync({ family: "Inter", style: "Thin" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Black" });
    await figma.loadFontAsync({ family: "Inter", style: "Thin Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Light Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Light Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Bold Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Black Italic" });

    // Roboto Mono load
    await figma.loadFontAsync({ family: "Roboto Mono", style: "Thin" });
    await figma.loadFontAsync({ family: "Roboto Mono", style: "Light" });
    await figma.loadFontAsync({ family: "Roboto Mono", style: "Regular" });
    await figma.loadFontAsync({ family: "Roboto Mono", style: "Medium" });
    await figma.loadFontAsync({ family: "Roboto Mono", style: "Bold" });
    await figma.loadFontAsync({ family: "Roboto Mono", style: "Thin Italic" });
    await figma.loadFontAsync({ family: "Roboto Mono", style: "Light Italic" });
    await figma.loadFontAsync({ family: "Roboto Mono", style: "Italic" });
    await figma.loadFontAsync({
      family: "Roboto Mono",
      style: "Medium Italic",
    });
    await figma.loadFontAsync({ family: "Roboto Mono", style: "Bold Italic" });

    // Make sure the selection is a single piece of text before proceeding.

    if (figma.currentPage.selection.length === 0) {
      // if not, show a message
      figma.closePlugin("Select a text object to convert it");
      return;
    } // if it is not a text object, show a message
    const nodes = figma.currentPage.selection.filter(function (node) {
      return node.type === "TEXT";
    }) as Array<TextNode>;
    if (nodes.length === 0) {
      figma.closePlugin("Select a text object to convert it");
      return;
    } else {
      for (const node of figma.currentPage.selection) {
        if ("characters" in node) {
          const errorMessage = [
            "AssertionError: Bad luck!",
            "ValueError: Cannot use None as a query value",
            "Page Not Found: ['http://opbeans:3000/api/types/3']",
            "Page Not Found: ['http://opbeans:3000/api/types/3']",
            "JSONDecodeError: Expecting value: line 1 column 1 (char 0)",
            "OperationalError: connection to server at (10.40.6.217)",
            "Couldn't find Customer with 'id'=601",
            "Couldn't find Order with 'id'=178",
            "Couldn't find Customer without an ID",
            "Response status 404execution expired",
          ];
          const randomErrorMessage = Math.floor(
            Math.random() * errorMessage.length
          );

          node.characters = errorMessage[randomErrorMessage];
        }
      }
    }
  }

  createErrorMessage().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
} else if (figma.command == "last-seen") {
  async function createLastSeen(): Promise<string | undefined> {
    // Inter is the font that objects will be created in Figma.
    // We need to wait for fonts to load before creating text using them.
    await figma.loadFontAsync({ family: "Inter", style: "Thin" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Black" });
    await figma.loadFontAsync({ family: "Inter", style: "Thin Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Light Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Light Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Bold Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Black Italic" });
    // Make sure the selection is a single piece of text before proceeding.

    if (figma.currentPage.selection.length === 0) {
      // if not, show a message
      figma.closePlugin("Select a text object to convert it");
      return;
    } // if it is not a text object, show a message
    const nodes = figma.currentPage.selection.filter(function (node) {
      return node.type === "TEXT";
    }) as Array<TextNode>;
    if (nodes.length === 0) {
      figma.closePlugin("Select a text object to convert it");
      return;
    } else {
      for (const node of figma.currentPage.selection) {
        if ("characters" in node) {
          const characters = "123456789";
          function generateLastSeen(length) {
            let result = "";
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
              result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
              );
            }
            return result;
          }

          const time = ["days", "hours", "minutes"];
          const randomLastSeen = Math.floor(Math.random() * time.length);
          node.characters =
            generateLastSeen(1) + " " + time[randomLastSeen] + " " + "ago";
        }
      }
    }
  }

  createLastSeen().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
} else if (figma.command == "transaction") {
  async function createTransaction(): Promise<string | undefined> {
    // Inter is the font that objects will be created in Figma.
    // We need to wait for fonts to load before creating text using them.
    await figma.loadFontAsync({ family: "Inter", style: "Thin" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Black" });
    await figma.loadFontAsync({ family: "Inter", style: "Thin Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Light Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Light Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Bold Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Black Italic" });
    // Make sure the selection is a single piece of text before proceeding.

    if (figma.currentPage.selection.length === 0) {
      // if not, show a message
      figma.closePlugin("Select a text object to convert it");
      return;
    } // if it is not a text object, show a message
    const nodes = figma.currentPage.selection.filter(function (node) {
      return node.type === "TEXT";
    }) as Array<TextNode>;
    if (nodes.length === 0) {
      figma.closePlugin("Select a text object to convert it");
      return;
    } else {
      for (const node of figma.currentPage.selection) {
        if ("characters" in node) {
          const transaction = [
            "ProductDetail",
            "home",
            "BlogDetail",
            "VideoDetail",
            "downloadsRedesign",
            "DefaultDetail",
            "ProductVersion",
            "PastReleases1",
            "Click - a",
            "BlogPost",
            "Forms",
            "Click - span-reporter",
            "fullWidthOverview",
            "searchPage",
            "PricingRedesign",
            "Click - div",
            "Subscriptions",
            "FullWidthOverview",
            "Careers",
            "CourseDetail",
            "Blog",
          ];
          const randomTransaction = Math.floor(
            Math.random() * transaction.length
          );

          node.characters = transaction[randomTransaction];
        }
      }
    }
  }

  createTransaction().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
} else if (figma.command == "error-type") {
  async function createErrorType(): Promise<string | undefined> {
    // Inter is the font that objects will be created in Figma.
    // We need to wait for fonts to load before creating text using them.
    await figma.loadFontAsync({ family: "Inter", style: "Thin" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Black" });
    await figma.loadFontAsync({ family: "Inter", style: "Thin Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Light Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Light Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Bold Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Black Italic" });
    // Make sure the selection is a single piece of text before proceeding.

    if (figma.currentPage.selection.length === 0) {
      // if not, show a message
      figma.closePlugin("Select a text object to convert it");
      return;
    } // if it is not a text object, show a message
    const nodes = figma.currentPage.selection.filter(function (node) {
      return node.type === "TEXT";
    }) as Array<TextNode>;
    if (nodes.length === 0) {
      figma.closePlugin("Select a text object to convert it");
      return;
    } else {
      for (const node of figma.currentPage.selection) {
        if ("characters" in node) {
          const errorType = [
            "ActiveRecord::RecordNotFound",
            "HTTP::ConnectionError",
            "BlogDTimeout::Erroretail",
            "ActiveRecord::ConnectionNotEstablished",
            "ActiveRecord::NoDatabaseError",
          ];
          const randomErrorType = Math.floor(Math.random() * errorType.length);

          node.characters = errorType[randomErrorType];
        }
      }
    }
  }

  createErrorType().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
} else if (figma.command == "storage-size") {
  async function createSize(): Promise<string | undefined> {
    // Inter is the font that objects will be created in Figma.
    // We need to wait for fonts to load before creating text using them.
    await figma.loadFontAsync({ family: "Inter", style: "Thin" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Extra Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Black" });
    await figma.loadFontAsync({ family: "Inter", style: "Thin Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Light Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Light Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold Italic" });
    await figma.loadFontAsync({
      family: "Inter",
      style: "Extra Bold Italic",
    });
    await figma.loadFontAsync({ family: "Inter", style: "Black Italic" });
    // Make sure the selection is a single piece of text before proceeding.
    if (figma.currentPage.selection.length === 0) {
      // if not, show a message
      figma.closePlugin("Select a text object to convert it");
      return;
    } // if it is not a text object, show a message
    const nodes = figma.currentPage.selection.filter(function (node) {
      return node.type === "TEXT";
    }) as Array<TextNode>;
    if (nodes.length === 0) {
      figma.closePlugin("Select a text object to convert it");
      return;
    } else {
      for (const node of figma.currentPage.selection) {
        if (figma.currentPage.selection.length === 0) {
          // if not, show a message
          figma.closePlugin("Select a text object to convert it");
          return;
        }
        // if it is not a text object, show a message
        const nodes = figma.currentPage.selection.filter(function (node) {
          return node.type === "TEXT";
        }) as Array<TextNode>;
        if (nodes.length === 0) {
          figma.closePlugin("Select a text object to convert it");
          return;
        }
        for (const node of figma.currentPage.selection) {
          if ("characters" in node) {
            const characters = "123456789";
            function generateSize(length) {
              let result = "";
              const charactersLength = characters.length;
              for (let i = 0; i < length; i++) {
                result += characters.charAt(
                  Math.floor(Math.random() * charactersLength)
                );
              }
              return result;
            }

            node.characters = generateSize(3) + "." + generateSize(1) + " GB";
          }
        }
      }
    }
  }

  createSize().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
