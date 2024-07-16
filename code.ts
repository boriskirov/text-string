// Load fonts async
async function loadMonospaceFont() {
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
}
async function loadSansSerifFont() {
  // Inter is the font that objects will be created in Figma.
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
}

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
  // Load Roboto Mono
  figma.loadFontAsync({ family: "Roboto Mono", style: "Regular" });
  figma.loadFontAsync({ family: "Roboto Mono", style: "Bold" });
  figma.loadFontAsync({ family: "Roboto Mono", style: "Italic" });
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

    // ONCLICK EVENTS LOGIC BELOW

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
    // Update duration in milliseconds
    if (msg.type === "change-duration-ms") {
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

    // Update duration in seconds
    if (msg.type === "change-duration-s") {
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
          function generateDurationSec(length) {
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
            generateDurationSec(1) + "," + "0" + generateDurationSec(1) + " ms";
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
            "adService",
            "checkoutService",
            "quoteService",
            "shippingService",
            "currencyService",
            "productCatalogService",
            "synth-node-0",
            "synth-node-1",
            "web-go",
            "order-processing-dotnet",
            "loadgenerator",
            "api-backend-java",
            "service-with-transactions",
            "consumer",
            "service-with-too-many-errors",
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

    // Update Storage size
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

    //Update host
    if (msg.type === "change-host-name") {
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
          const HostName = [
            "gke-edge-oblt-pool-1-9a60016d-4b34",
            "gke-edge-oblt-pool-1-9a60016d-xd62",
            "gke-edge-oblt-pool-1-9a60016d-vjw6",
            "gke-edge-oblt-pool-1-3b11012g-wyn6",
            "gke-edge-oblt-pool-1-9a50016d-aj23",
            "gke-edge-oblt-pool-1-7a82216d-wjs8",
            "gke-edge-oblt-pool-1-2a27716d-uja2",
            "gke-edge-oblt-pool-1-5a91116d-ojw3",
            "gke-edge-oblt-pool-1-4a60016d-pjp1",
            "gke-edge-oblt-pool-1-7a60016d-slot",
            "gke-edge-oblt-pool-1-9a60016d-slot",
          ];
          const randomErrorType = Math.floor(Math.random() * HostName.length);

          node.characters = HostName[randomErrorType];
        }
      }
    }

    // Update traffic
    if (msg.type === "change-traffic") {
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
          function generateTraffic(length) {
            let result = "";
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
              result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
              );
            }
            return result;
          }

          node.characters = generateTraffic(2) + " Mbit/s";
        }
      }
    }

    // Update Android version
    if (msg.type === "change-android-version") {
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
          const AndroidVersion = [
            "1",
            "Eclair 2",
            "Honeycomb 3",
            "Ice Cream Sandwich 4",
            "Lollipop 5",
            "Marshmallow 6",
            "7",
            "Oreo 8",
            "Pie 9",
            "10",
            "11",
            "12",
            "12L",
            "13",
          ];
          const randomAndroidVersion = Math.floor(
            Math.random() * AndroidVersion.length
          );

          const characters = "123456789";
          function generateAndroidVersion(length) {
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
            AndroidVersion[randomAndroidVersion] +
            "." +
            generateAndroidVersion(1) +
            "." +
            generateAndroidVersion(1);
        }
      }
    }

    // Update iOS version
    if (msg.type === "change-ios-version") {
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
          const IosVersion = [
            "iPhone OS 1",
            "iPhone OS 2",
            "iPhone OS 3",
            "iOS 4",
            "iOS 5",
            "iOS 6",
            "iOS 7",
            "iOS 8",
            "iOS 9",
            "iOS 10",
            "iOS 11",
            "iOS 12",
            "iOS 13",
            "iOS 14",
            "iOS 15",
            "iOS 16",
          ];
          const randomIosVersion = Math.floor(
            Math.random() * IosVersion.length
          );

          const characters = "123456789";
          function generateIosVersion(length) {
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
            IosVersion[randomIosVersion] +
            "." +
            generateIosVersion(1) +
            "." +
            generateIosVersion(1);
        }
      }
    }

    // Update Apple mobilde device
    if (msg.type === "change-apple-mobile-device") {
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
          const AppleMobileDevice = [
            "iPhone",
            "iPhone 3G",
            "iPhone 3GS",
            "iPhone 4",
            "iPhone 4S",
            "iPhone 5",
            "iPhone 5C",
            "iPhone 5S",
            "iPhone 6",
            "iPhone 6 Plus",
            "iPhone 6S",
            "iPhone 6S Plus",
            "iPhone SE",
            "iPhone 7",
            "iPhone 7 Plus",
            "iPhone 8",
            "iPhone 8 Plus",
            "iPhone X",
            "iPhone XR",
            "iPhone XS",
            "iPhone XS Max",
            "iPhone 11",
            "iPhone 11 Pro",
            "iPhone 11 Pro Max",
            "iPhone SE",
            "iPhone 12",
            "iPhone 12 Mini",
            "iPhone 12 Pro",
            "iPhone 13",
            "iPhone 13 Mini",
            "iPhone 13 Pro",
            "iPhone 14",
            "iPhone 14 Plus",
            "iPhone 14 Pro",
            "iPhone 14 Pro Max",
          ];
          const randomAppleMobileDevice = Math.floor(
            Math.random() * AppleMobileDevice.length
          );

          node.characters = AppleMobileDevice[randomAppleMobileDevice];
        }
      }
    }

    // Update Android mobile device
    if (msg.type === "change-android-mobile-device") {
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
          const AndroidMobileDevice = [
            "Galaxy A2 Core",
            "Galaxy A10",
            "Galaxy A20",
            "Galaxy A30",
            "Galaxy C5",
            "Galaxy C7",
            "Galaxy E7",
            "Galaxy J1",
            "Galaxy J Max",
            "Galaxy J3 Eclipse",
            "Galaxy J7 Prime 2",
            "Galaxy M20",
            "Xperia X10",
            "Xperia SP",
            "Xperia M4 Aqua",
            "Mi 1S",
            "Mi Note 10",
            "Redmi 3",
            "Redmi Y3",
            "Poco F2 Pro",
            "Xiaomi Black Shark",
            "Xiaomi Black Shark Helo",
            "Nubia Red Magic Mars",
          ];
          const randomAndroidMobileDevice = Math.floor(
            Math.random() * AndroidMobileDevice.length
          );

          node.characters = AndroidMobileDevice[randomAndroidMobileDevice];
        }
      }
    }

    // Update browser
    if (msg.type === "change-browser") {
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
          const Browser = [
            "Google Chrome",
            "Mozilla Firefox",
            "Edge",
            "Internet Explorer",
            "Safari",
            "Opera",
            "SeaMonkey",
            "Maxthon",
            "Vivaldi",
            "GNU IceCat",
            "Comodo Dragon",
            "Comodo IceDragon",
            "Sleipnir",
            "Yandex Browser",
            "Tor",
            "Pale Moon",
            "The Classic Browser",
            "Dooble",
            "TenFourFox",
            "Polarity Browser",
            "Crusta Browser",
            "Otter Browser",
            "Brave",
            "QupZilla",
            "iCab",
            "Chromium",
            "Sogou browser",
            "Roccat Browser",
            "360 Security Brwoser",
            "SlimBrowser",
            "Slimjet",
            "Konqueror",
            "Lunascape",
          ];
          const randomBrowser = Math.floor(Math.random() * Browser.length);

          node.characters = Browser[randomBrowser];
        }
      }
    }

    // Update country
    if (msg.type === "change-country") {
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
          const Country = [
            "Afghanistan",
            "land Islands",
            "Albania",
            "Algeria",
            "American Samoa",
            "Andora",
            "Angola",
            "Anguilla",
            "Antarctica",
            "Antigua and Barbuda",
            "Argentina",
            "Armenia",
            "Aruba",
            "Australia",
            "Austria",
            "Azerbaijan",
            "Bahamas",
            "Bahrain",
            "Bangladesh",
            "Barbados",
            "Belarus",
            "Belgium",
            "Belize",
            "Benin",
            "Bermuda",
            "Bhutan",
            "Bolivia",
            "Bosnia and Herzegovina",
            "Botswana",
            "Bouvet Island",
            "Brazil",
            "British Indian Ocean Territory",
            "Brunei Darussalam",
            "Bulgaria",
            "Burkina Faso",
            "Burundi",
            "Cambodia",
            "Cameroon",
            "Canada",
            "Cape Verde",
            "Cayman Islands",
            "Central African Republic",
            "Chad",
            "Chile",
            "China",
            "Christmas Island",
            "Cocos (Keeling) Islands",
            "Colombia",
            "Comoros",
            "Congo",
            "Congo, The Democratic Republic of the",
            "Cook Islands",
            "Costa Rica",
            'Cote D"Ivoire',
            "Croatia",
            "Cuba",
            "Cyprus",
            "Czech Republic",
            "Denmark",
            "Djibouti",
            "Dominica",
            "Dominican Republic",
            "Ecuador",
            "Egypt",
            "El Salvador",
            "Equatorial Guinea",
            "Eritrea",
            "Estonia",
            "Ethiopia",
            "Falkland Islands (Malvinas)",
            "Faroe Islands",
            "Fiji",
            "Finland",
            "France",
            "French Guiana",
            "French Polynesia",
            "French Southern Territories",
            "Gabon",
            "Gambia",
            "Georgia",
            "Germany",
            "Ghana",
            "Gibraltar",
            "Greece",
            "Greenland",
            "Grenada",
            "Guadeloupe",
            "Guam",
            "Guatemala",
            "Guernsey",
            "Guinea",
            "Guinea-Bissau",
            "Guyana",
            "Haiti",
            "Heard Island and Mcdonald Islands",
            "Holy See (Vatican City State)",
            "Honduras",
            "Hong Kong",
            "Hungary",
            "Iceland",
            "India",
            "Indonesia",
            "Iran, Islamic Republic Of",
            "Iraq",
            "Ireland",
            "Isle of Man",
            "Israel",
            "Italy",
            "Jamaica",
            "Japan",
            "Jersey",
            "Jordan",
            "Kazakhstan",
            "Kenya",
            "Kiribati",
            'Korea, Democratic People"S Republic of',
            "Korea, Republic of",
            "Kuwait",
            "Kyrgyzstan",
            'Lao People"S Democratic Republic',
            "Latvia",
            "Lebanon",
            "Lesotho",
            "Liberia",
            "Libyan Arab Jamahiriya",
            "Liechtenstein",
            "Lithuania",
            "Luxembourg",
            "Macao",
            "Macedonia, The Former Yugoslav Republic of",
            "Madagascar",
            "Malawi",
            "Malaysia",
            "Maldives",
            "Mali",
            "Malta",
            "Marshall Islands",
            "Martinique",
            "Mauritania",
            "Mauritius",
            "Mayotte",
            "Mexico",
            "Micronesia, Federated States of",
            "Moldova, Republic of",
            "Monaco",
            "Mongolia",
            "Montenegro",
            "Montserrat",
            "Morocco",
            "Mozambique",
            "Myanmar",
            "Namibia",
            "Nauru",
            "Nepal",
            "Netherlands",
            "Netherlands Antilles",
            "New Caledonia",
            "New Zealand",
            "Nicaragua",
            "Niger",
            "Nigeria",
            "Niue",
            "Norfolk Island",
            "Northern Mariana Islands",
            "Norway",
            "Oman",
            "Pakistan",
            "Palau",
            "Palestinian Territory, Occupied",
            "Panama",
            "Papua New Guinea",
            "Paraguay",
            "Peru",
            "Philippines",
            "Pitcairn",
            "Poland",
            "Portugal",
            "Puerto Rico",
            "Qatar",
            "Reunion",
            "Romania",
            "RWANDA",
            "Saint Helena",
            "Saint Kitts and Nevis",
            "Saint Lucia",
            "Saint Pierre and Miquelon",
            "Saint Vincent and the Grenadines",
            "Samoa",
            "San Marino",
            "Sao Tome and Principe",
            "Saudi Arabia",
            "Senegal",
            "Serbia",
            "Seychelles",
            "Sierra Leone",
            "Singapore",
            "Slovakia",
            "Slovenia",
            "Solomon Islands",
            "Somalia",
            "South Africa",
            "South Georgia and the South Sandwich Islands",
            "Spain",
            "Sri Lanka",
            "Sudan",
            "Suriname",
            "Svalbard and Jan Mayen",
            "Swaziland",
            "Sweden",
            "Switzerland",
            "Syrian Arab Republic",
            "Taiwan, Province of China",
            "Tajikistan",
            "Tanzania, United Republic of",
            "Thailand",
            "Timor-Leste",
            "Togo",
            "Tokelau",
            "Tonga",
            "Trinidad and Tobago",
            "Tunisia",
            "Turkey",
            "Turkmenistan",
            "Turks and Caicos Islands",
            "Tuvalu",
            "Uganda",
            "Ukraine",
            "United Arab Emirates",
            "United Kingdom",
            "United States",
            "United States Minor Outlying Islands",
            "Uruguay",
            "Uzbekistan",
            "Vanuatu",
            "Venezuela",
            "Viet Nam",
            "Virgin Islands, British",
            "Virgin Islands, U.S.",
            "Wallis and Futuna",
            "Western Sahara",
            "Yemen",
            "Zambia",
            "Zimbabwe",
          ];
          const randomCountry = Math.floor(Math.random() * Country.length);

          node.characters = Country[randomCountry];
        }
      }
    }

    // Update hundreds
    if (msg.type === "change-hundreds") {
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
          const characters = "1236789";
          function generateHundreds(length) {
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
            generateHundreds(3) + "," + "0" + generateHundreds(2);
        }
      }
    }

    // Update network connection type
    if (msg.type === "change-nct") {
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
          const NetworkConnectionType = [
            "GPRS",
            "Regular 2G",
            "Good 2G",
            "Regular 3G",
            "Good 3G",
            "Regular 4G / LTE",
            "DSL",
            "Wi-Fi",
          ];
          const randomNetworkConnectionType = Math.floor(
            Math.random() * NetworkConnectionType.length
          );

          node.characters = NetworkConnectionType[randomNetworkConnectionType];
        }
      }
    }

    // Update version
    if (msg.type === "change-version") {
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
          function generateVersion(length) {
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
            generateVersion(2) +
            "." +
            generateVersion(1) +
            "." +
            generateVersion(1);
        }
      }
    }
    // Update alert reason
    if (msg.type == "change-alert-reason") {
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
          const numbers = "56789";
          function randomPercentage(length) {
            let result = "";
            const numbersLength = numbers.length;
            for (let i = 0; i < length; i++) {
              result += numbers.charAt(
                Math.floor(Math.random() * numbersLength)
              );
            }
            return result;
          }

          const minutes = "23456789";
          function randomMinute(length) {
            let result = "";
            const minutesLength = minutes.length;
            for (let i = 0; i < length; i++) {
              result += minutes.charAt(
                Math.floor(Math.random() * minutesLength)
              );
            }
            return result;
          }

          const alertReason = ["CPU usage", "Failed transaction rate", "Load"];
          const randomAlert = Math.floor(Math.random() * alertReason.length);

          const hostName = [
            "gke-edge-oblt-pool-1-9a60016d-4b34",
            "gke-edge-oblt-pool-1-9a60016d-xd62",
            "opbeans-php-857f67897d-pfmxk",
            "gke-edge-oblt-pool-1-3b11012g-wyn6",
            "gke-edge-oblt-pool-1-9a50016d-aj23",
            "opbeans-php-857f67897d-kjhsdf",
            "opbeans-php-9984393fh-lksdjfksdh",
            "gke-edge-oblt-pool-1-5a91116d-ojw3",
            "gke-edge-oblt-pool-1-4a60016d-pjp1",
            "gke-edge-oblt-pool-1-7a60016d-slot",
            "gke-edge-oblt-pool-1-9a60016d-slot",
          ];
          const randomHost = Math.floor(Math.random() * hostName.length);

          node.characters =
            alertReason[randomAlert] +
            " is " +
            " 9" +
            randomPercentage(1) +
            "%" +
            " in the last " +
            randomMinute(1) +
            " minutes for " +
            hostName[randomHost] +
            ". " +
            "Alert when > " +
            randomPercentage(2) +
            "%";
        }
      }
    }

    //Update random alert status
    if (msg.type === "change-alert-status") {
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
          const status = ["Active", "Recovered"];
          const randomAlertStatus = Math.floor(Math.random() * status.length);

          node.characters = status[randomAlertStatus];
        }
      }
    }

    //Update random alert source
    if (msg.type === "change-alert-source") {
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
          const source = [
            "gke-edge-oblt-pool-1-9a60016d-4b34",
            "gke-edge-oblt-pool-1-9a60016d-xd62",
            "gke-edge-oblt-pool-1-9a60016d-vjw6",
            "gke-edge-oblt-pool-1-3b11012g-wyn6",
            "gke-edge-oblt-pool-1-9a50016d-aj23",
            "gke-edge-oblt-pool-1-7a82216d-wjs8",
            "gke-edge-oblt-pool-1-2a27716d-uja2",
            "gke-edge-oblt-pool-1-5a91116d-ojw3",
            "gke-edge-oblt-pool-1-4a60016d-pjp1",
            "gke-edge-oblt-pool-1-7a60016d-slot",
            "gke-edge-oblt-pool-1-9a60016d-slot",
            "beat.stats.apm_server.acm.response.valid.ok",
            "beat.stats.apm_server.decoder.deflate.content-length",
            "beat.stats.apm_server.decoder.gzip.count",
            "beat.stats.apm_server.acm.response.errors.unauthorized",
            "beat.stats.apm_server.acm.response.errors.notfound",
            "beat.stats.apm_server.acm.request.count",
            "azure.app_state.browser_timings_total_duration.avg",
            "awsfargate.task_stats.network.*.inbound.bytes",
            "awsfargate.task_stats.memory.fail.coun",
            "awsfargate.task_stats.diskio.total",
            "awsfargate.task_stats.diskio.read.ops",
            "aws.usage.metrics.CallCount.sum",
            "aws.sqs.messages.sent",
            "aws.sns.metrics.NumberOfMessagesPublished.sum",
            "aws.s3_request.errors.4xx",
            "aws.rds.throughput.network_transmit",
            "aws.rds.replica_lag.sec",
            "Hosts",
            "Kubernetes Pods",
            "Docker Containers",
            "EC2 Instances",
            "S3 Buckets",
            "RDS Databases",
            "SQS Queues",
          ];

          const randomSource = Math.floor(Math.random() * source.length);

          node.characters = source[randomSource];
        }
      }
    }

    //Update random alert source
    if (msg.type === "change-data-field-apm") {
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
          const dataFieldApm = [
            "cloud.availability_zone",
            "cloud.instance.id",
            "cloud.instance.name",
            "cloud.machine.type",
            "cloud.project.id",
            "cloud.project.name",
            "cloud.provider",
            "container.id",
            "cloud.region",
            "container.id",
            "esc.version",
            "transaction.type",
            "transaction.name",
            "url.query",
            "user_agent.name",
            "service.environment",
            "service.name",
            "processor.name",
            "service.version",
            "session.id",
          ];

          const randomDataFieldApm = Math.floor(
            Math.random() * dataFieldApm.length
          );

          node.characters = dataFieldApm[randomDataFieldApm];
        }
      }
    }
    //Update random environment
    if (msg.type === "change-environment") {
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
          const envVar = [
            "production",
            "testing",
            "dev",
            "staging",
            "2 environments",
            "8 environments",
            "preprod",
            "locale",
            "Not defined",
            "default",
            "https://www.elastic.co",
            "https://stag.elastic.co",
          ];

          const randomEnv = Math.floor(Math.random() * envVar.length);

          node.characters = envVar[randomEnv];
        }
      }
    }

    //Update random log-level
    if (msg.type === "change-log-level") {
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
          const logLevelVar = [
            "all",
            "trace",
            "debug",
            "info",
            "warn",
            "error",
            "fatal",
            "off",
          ];

          const randomLogLevel = Math.floor(Math.random() * logLevelVar.length);

          node.characters = logLevelVar[randomLogLevel];
        }
      }
    }

    //Update random message
    if (msg.type === "change-message") {
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
          const message = [
            "App: elastic-marketo-sapi-prod, Deployment 636384d6eb334d587f9b2b11 Latest Timestamp: 1668506911.107 Row: 7, Column: 5:",
            "2023/03/22 10:55:34 [warn] 981#981: *2628922 a client request body is buffered to a temporary file /tmp/client-body/0000011658",
            "App: elastic-etl-api-prod, Deployment 63e29a66de799304d1628079 Latest Timestamp: 1675796070.452 Row: 10, Column: 5:",
            "App: elastic-marketo-sapi-prod, Deployment 63551fd5877f89107bad6638",
            "[ 2][764607.486704] POST http://apm-proxy-be1/intake/v2/rum/events HTTP/1.1 202 793/0 47.686 ok",
            "[ 4][764606.337358] POST http://apm-proxy-be1/intake/v2/rum/events HTTP/1.1 202 663/0 49.737 ok",
            "[ 2][764608.588758] OPTIONS http://apm-proxy-be1/intake/v2/rum/events HTTP/1.1 200 0/0 47.149 ok",
            "[ 2][764608.095404] POST http://apm-proxy-be1/intake/v2/rum/events HTTP/1.1 202 11025/0 55.512 ok",
            "TypeError: Cannot read property 'navigation' of undefined",
            "at loadGetInitialProps (/app/node_modules/next/dist/next-server/lib/utils.js:5:101)",
            "at AnimatedNavbar_AnimatedNavbar.render (/app/.next/server/pages/_app.js:3352:12)",
            "at loadGetInitialProps (/app/node_modules/next/dist/next-server/lib/utils.js:5:101)",
            "at Function.getInitialProps (/app/.next/server/pages/_document.js:149:9)",
            "2023/03/22 10:55:32 oauthproxy.go:796: 10.8.5.145:35532 (159.223.1.201) Cookie _oauth2_proxy_1649867679 not present",
            "2023/03/22 10:55:33 oauthproxy.go:796: 10.8.15.13:48144 (161.35.149.237) Cookie _oauth2_proxy_1649867679 not present",
            "2023/03/22 10:55:33 oauthproxy.go:796: 10.8.5.145:54056 (161.35.149.237) Cookie _oauth2_proxy_1649867679 not present",
            "TypeError: Cannot read property 'navigation' of undefined",
          ];
          const randomMessage = Math.floor(Math.random() * message.length);
          node.characters = message[randomMessage];
        }
      }
    }

    //Update random profiling function
    if (msg.type === "change-profiling-function") {
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
          const profilingFunction = [
            "vmlinux: __lock_text_start",
            "JVM/Hotspot: vtable chunks",
            "JVM/Hotspot: StubRoutines (2)",
            "vmlinux: copy_user_enhanced_fast_string",
            "auditbeat",
            "libz.so.1.2.11",
            "JVM/Hotspot: int java.lang.StringLatin1.hashCode(byte[])",
            "pf-host-agent",
            "JVM/Hotspot: java.lang.Object java.util.HashMap.putVal(int, java.lang.Object, java.lang.Object, boolean, boolean)",
            "JVM/Hotspot: java.util.HashMap$Node[] java.util.HashMap.resize()",
            "auditbeat",
            "metricbeat",
            "vmlinux: __seccomp_filter",
            "vmlinux: clear_page_erms",
            "libpthread-2.31.so",
            "containerd",
            "JVM/Hotspot: java.lang.Object java.util.HashMap$EntryIterator.next()",
          ];

          const randomProfilingFunction = Math.floor(
            Math.random() * profilingFunction.length
          );

          node.characters = profilingFunction[randomProfilingFunction];
        }
      }
    }
    //Update random profiling-source-file
    if (msg.type === "change-profiling-source-file") {
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
          const sourceFile = [
            "vmlinux+0xa75ab4",
            "<unsymbolized>",
            "vmlinux+0xcc9c8",
            "StringLatin1.java#193",
            "HashMap.java#669",
            "StringHelper.java#165",
            "IndexingChain.java#566",
            "pf-host-agent+0x468e",
            "HashMap.java#684",
            "UTF8StreamJsonParser.java#2554",
            "metricbeat+0x2826abe",
            "FreqProxTermsWriterPerField.java#142",
            "containerd+0x1165782",
            "LZ4.java#555",
            "LZ4.java#225",
            "<unsymbolized>",
            "ArraysSupport.java#298",
          ];

          const randomSourceFile = Math.floor(
            Math.random() * sourceFile.length
          );

          node.characters = sourceFile[randomSourceFile];
        }
      }
    }
    //Update random timestamp
    if (msg.type === "change-timestamp") {
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
          const months = ["Jan", "Feb", "Mar"];
          const randomMonthIndex = Math.floor(Math.random() * months.length);
          const randomMonth = months[randomMonthIndex];

          function addZero(input) {
            return String(input).length === 1 ? `0${input}` : input;
          }

          const year = 2023;

          function Day(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
          const randomDay = addZero(Day(0, 31));

          function Minutes(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
          const randomMinute = addZero(Minutes(0, 59));

          function Hours(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
          const randomHour = addZero(Hours(1, 24));

          const seconds = addZero(Math.floor(Math.random() * 60));
          const milliseconds = Math.floor(Math.random() * 999);

          node.characters = `${randomMonth} ${randomDay}, ${year} @ ${randomHour}:${randomMinute}:${seconds}.${milliseconds}`;
        }
      }
    }

    //Update CO2
    if (msg.type === "change-co2") {
      // Check if something is selected
      if (figma.currentPage.selection.length === 0) {
        // if not, show a message
        figma.notify("Select a text object to convert it", { timeout: 5 });
        return;
      }
      // if it is not a text object, show a message
      // 188.5 lbs / 85.5 kg
      const nodes = figma.currentPage.selection.filter(function (node) {
        return node.type === "TEXT";
      }) as Array<TextNode>;
      if (nodes.length === 0) {
        figma.notify("Select a text object to convert it", { timeout: 5 });
        return;
      }

      for (const node of figma.currentPage.selection) {
        if ("characters" in node) {
          const characters = "1236789";
          function generateC02(length) {
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
            generateC02(3) +
            "." +
            generateC02(2) +
            " " +
            "lbs" +
            " " +
            "/" +
            " " +
            generateC02(2) +
            "." +
            generateC02(2) +
            " " +
            "kg";
        }
      }
    }

    //Update Dollar currency
    if (msg.type === "change-dollar") {
      // Check if something is selected
      if (figma.currentPage.selection.length === 0) {
        // if not, show a message
        figma.notify("Select a text object to convert it", { timeout: 5 });
        return;
      }
      // if it is not a text object, show a message
      // 188.5 lbs / 85.5 kg
      const nodes = figma.currentPage.selection.filter(function (node) {
        return node.type === "TEXT";
      }) as Array<TextNode>;
      if (nodes.length === 0) {
        figma.notify("Select a text object to convert it", { timeout: 5 });
        return;
      }

      for (const node of figma.currentPage.selection) {
        if ("characters" in node) {
          const characters = "1236789";
          function generateDollar(length) {
            let result = "";
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
              result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
              );
            }
            return result;
          }

          node.characters = generateDollar(3) + "." + generateDollar(2) + "$";
        }
      }
    }
    //Update random cloud region
    if (msg.type === "change-region") {
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
          const region = [
            "us-west1",
            "us-west2",
            "us-west3",
            "us-west4",
            "us-west5",
            "us-west6",
            "us-west7",
            "us-west8",
            "europe-west1",
            "europe-west2",
            "europe-west3",
            "europe-west4",
            "europe-west5",
            "europe-west6",
            "europe-west7",
            "europe-west8",
            "europe-east1",
            "europe-east2",
            "europe-east3",
            "europe-east4",
            "europe-east5",
            "europe-east6",
            "europe-east7",
            "europe-east8",
            "asia-east1",
            "asia-east2",
            "asia-east3",
            "asia-east4",
            "asia-east5",
            "me-central1",
            "me-central2",
            "me-central3",
            "me-central4",
            "me-central5",
            "me-central6",
            "africa-south1",
            "us-east1",
            "us-east2",
            "us-north1",
            "us-north2",
            "us-north3",
            "us-north4",
            "us-north5",
            "us-north6",
            "us-north7",
            "us-north8",
            "us-east3",
            "us-east4",
            "us-east5",
            "us-east6",
            "us-east7",
            "us-east8",
          ];

          const randomRegion = Math.floor(Math.random() * region.length);

          node.characters = region[randomRegion];
        }
      }
    }
    //Update random cloud provider
    if (msg.type === "change-cloud") {
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
          const email = [
            "devops_master",
            "sysadmin_guru",
            "automate_ninja",
            "code_whisperer",
            "infra_architect",
            "deploy_wizard",
            "container_captain",
            "orchestration_pro",
            "monitor_mage",
            "resilience_expert",
            "troubleshoot_titan",
            "global-sre-ops",
            "global-sre-dev-ops",
          ];

          const randomEmail = Math.floor(Math.random() * email.length);

          node.characters = email[randomEmail] + "@elastic.co";
        }
      }
    }
    //Update random cloud
    if (msg.type === "change-cloud-provider") {
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
          const cloud = [
            "Amazon Web Services (AWS)",
            "Microsoft Azure",
            "Google Cloud Platform (GCP)",
            "IBM Cloud",
            "Oracle Cloud",
            "Alibaba Cloud",
            "SAP Cloud",
            "Linode",
            "Heroku",
            "Salesforce",
            "DigitalOcean",
            "Linode",
          ];

          const randomCloudProvider = Math.floor(Math.random() * cloud.length);

          node.characters = cloud[randomCloudProvider];
        }
      }
    }
  };

  // SHORTCUTS LOGIC BELOW
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
}
if (figma.command == "health") {
  async function createHealth(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
}
if (figma.command == "service") {
  async function createService(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
              "adService",
              "checkoutService",
              "quoteService",
              "shippingService",
              "currencyService",
              "productCatalogService",
              "synth-node-0",
              "synth-node-1",
              "web-go",
              "order-processing-dotnet",
              "loadgenerator",
              "api-backend-java",
              "service-with-transactions",
              "consumer",
              "service-with-too-many-errors",
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
}
if (figma.command == "trace") {
  async function createTrace(): Promise<string | undefined> {
    // Load fonts
    await loadMonospaceFont();
    await loadSansSerifFont();
    // We need to wait for fonts to load before creating text using them.

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
}
if (figma.command == "duration-ms") {
  async function createDuration(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
            function generateDurationSec(length) {
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
              generateDurationSec(1) + "," + generateDurationSec(3) + " ms";
          }
        }
      }
    }
  }

  createDuration().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
if (figma.command == "percentage") {
  async function createPercentage(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
}
if (figma.command == "throughput") {
  async function createThroughput(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
}
if (figma.command == "date") {
  async function createDate(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
}
if (figma.command == "severity") {
  async function createSeverity(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
}
if (figma.command == "span-trace-id") {
  async function createID(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
}
if (figma.command == "monitor") {
  async function createMonitor(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
}
if (figma.command == "dependency") {
  async function createDependency(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
}
if (figma.command == "error-message") {
  async function createErrorMessage(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();

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
}
if (figma.command == "last-seen") {
  async function createLastSeen(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
}
if (figma.command == "transaction") {
  async function createTransaction(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
}
if (figma.command == "error-type") {
  async function createErrorType(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
}
if (figma.command == "storage-size") {
  async function createSize(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
if (figma.command == "host-name") {
  async function createHostName(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
          const HostName = [
            "gke-edge-oblt-pool-1-9a60016d-4b34",
            "gke-edge-oblt-pool-1-9a60016d-xd62",
            "gke-edge-oblt-pool-1-9a60016d-vjw6",
            "gke-edge-oblt-pool-1-3b11012g-wyn6",
            "gke-edge-oblt-pool-1-9a50016d-aj23",
            "gke-edge-oblt-pool-1-7a82216d-wjs8",
            "gke-edge-oblt-pool-1-2a27716d-uja2",
            "gke-edge-oblt-pool-1-5a91116d-ojw3",
            "gke-edge-oblt-pool-1-4a60016d-pjp1",
            "gke-edge-oblt-pool-1-7a60016d-slot",
            "gke-edge-oblt-pool-1-9a60016d-slot",
          ];
          const randomErrorType = Math.floor(Math.random() * HostName.length);

          node.characters = HostName[randomErrorType];
        }
      }
    }
  }

  createHostName().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
if (figma.command == "traffic") {
  async function createTraffic(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
            function generateTraffic(length) {
              let result = "";
              const charactersLength = characters.length;
              for (let i = 0; i < length; i++) {
                result += characters.charAt(
                  Math.floor(Math.random() * charactersLength)
                );
              }
              return result;
            }

            node.characters = generateTraffic(2) + " Mbit/s";
          }
        }
      }
    }
  }

  createTraffic().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
if (figma.command == "duration-s") {
  async function createDurationSec(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
            function generateDurationSec(length) {
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
              generateDurationSec(1) +
              "," +
              "0" +
              generateDurationSec(1) +
              " s";
          }
        }
      }
    }
  }

  createDurationSec().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
if (figma.command == "android-version") {
  async function createAndroidVersion(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
          const AndroidVersion = [
            "1",
            "Eclair 2",
            "Honeycomb 3",
            "Ice Cream Sandwich 4",
            "Lollipop 5",
            "Marshmallow 6",
            "7",
            "Oreo 8",
            "Pie 9",
            "10",
            "11",
            "12",
            "12L",
            "13",
          ];
          const randomAndroidVersion = Math.floor(
            Math.random() * AndroidVersion.length
          );

          const characters = "123456789";
          function generateAndroidVersion(length) {
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
            AndroidVersion[randomAndroidVersion] +
            "." +
            generateAndroidVersion(1) +
            "." +
            generateAndroidVersion(1);
        }
      }
    }
  }

  createAndroidVersion().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
if (figma.command == "ios-version") {
  async function createIosVersion(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
          const IosVersion = [
            "iPhone OS 1",
            "iPhone OS 2",
            "iPhone OS 3",
            "iOS 4",
            "iOS 5",
            "iOS 6",
            "iOS 7",
            "iOS 8",
            "iOS 9",
            "iOS 10",
            "iOS 11",
            "iOS 12",
            "iOS 13",
            "iOS 14",
            "iOS 15",
            "iOS 16",
          ];
          const randomIosVersion = Math.floor(
            Math.random() * IosVersion.length
          );

          const characters = "123456789";
          function generateIosVersion(length) {
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
            IosVersion[randomIosVersion] +
            "." +
            generateIosVersion(1) +
            "." +
            generateIosVersion(1);
        }
      }
    }
  }

  createIosVersion().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
if (figma.command == "apple-mobile-device") {
  async function createMobileDeviceApple(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
          const AppleMobileDevice = [
            "iPhone",
            "iPhone 3G",
            "iPhone 3GS",
            "iPhone 4",
            "iPhone 4S",
            "iPhone 5",
            "iPhone 5C",
            "iPhone 5S",
            "iPhone 6",
            "iPhone 6 Plus",
            "iPhone 6S",
            "iPhone 6S Plus",
            "iPhone SE",
            "iPhone 7",
            "iPhone 7 Plus",
            "iPhone 8",
            "iPhone 8 Plus",
            "iPhone X",
            "iPhone XR",
            "iPhone XS",
            "iPhone XS Max",
            "iPhone 11",
            "iPhone 11 Pro",
            "iPhone 11 Pro Max",
            "iPhone SE",
            "iPhone 12",
            "iPhone 12 Mini",
            "iPhone 12 Pro",
            "iPhone 13",
            "iPhone 13 Mini",
            "iPhone 13 Pro",
            "iPhone 14",
            "iPhone 14 Plus",
            "iPhone 14 Pro",
            "iPhone 14 Pro Max",
          ];
          const randomAppleMobileDevice = Math.floor(
            Math.random() * AppleMobileDevice.length
          );

          node.characters = AppleMobileDevice[randomAppleMobileDevice];
        }
      }
    }
  }

  createMobileDeviceApple().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
if (figma.command == "android-mobile-device") {
  async function createMobileDeviceAndroid(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
          const AndroidMobileDevice = [
            "Galaxy A2 Core",
            "Galaxy A10",
            "Galaxy A20",
            "Galaxy A30",
            "Galaxy C5",
            "Galaxy C7",
            "Galaxy E7",
            "Galaxy J1",
            "Galaxy J Max",
            "Galaxy J3 Eclipse",
            "Galaxy J7 Prime 2",
            "Galaxy M20",
            "Xperia X10",
            "Xperia SP",
            "Xperia M4 Aqua",
            "Mi 1S",
            "Mi Note 10",
            "Redmi 3",
            "Redmi Y3",
            "Poco F2 Pro",
            "Xiaomi Black Shark",
            "Xiaomi Black Shark Helo",
            "Nubia Red Magic Mars",
          ];
          const randomAndroidMobileDevice = Math.floor(
            Math.random() * AndroidMobileDevice.length
          );

          node.characters = AndroidMobileDevice[randomAndroidMobileDevice];
        }
      }
    }
  }

  createMobileDeviceAndroid().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
if (figma.command == "browser") {
  async function createBrowser(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
          const Browser = [
            "Google Chrome",
            "Mozilla Firefox",
            "Edge",
            "Internet Explorer",
            "Safari",
            "Opera",
            "SeaMonkey",
            "Maxthon",
            "Vivaldi",
            "GNU IceCat",
            "Comodo Dragon",
            "Comodo IceDragon",
            "Sleipnir",
            "Yandex Browser",
            "Tor",
            "Pale Moon",
            "The Classic Browser",
            "Dooble",
            "TenFourFox",
            "Polarity Browser",
            "Crusta Browser",
            "Otter Browser",
            "Brave",
            "QupZilla",
            "iCab",
            "Chromium",
            "Sogou browser",
            "Roccat Browser",
            "360 Security Brwoser",
            "SlimBrowser",
            "Slimjet",
            "Konqueror",
            "Lunascape",
          ];
          const randomBrowser = Math.floor(Math.random() * Browser.length);

          node.characters = Browser[randomBrowser];
        }
      }
    }
  }

  createBrowser().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
if (figma.command == "country") {
  async function createCountry(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
          const Country = [
            "Afghanistan",
            "land Islands",
            "Albania",
            "Algeria",
            "American Samoa",
            "Andora",
            "Angola",
            "Anguilla",
            "Antarctica",
            "Antigua and Barbuda",
            "Argentina",
            "Armenia",
            "Aruba",
            "Australia",
            "Austria",
            "Azerbaijan",
            "Bahamas",
            "Bahrain",
            "Bangladesh",
            "Barbados",
            "Belarus",
            "Belgium",
            "Belize",
            "Benin",
            "Bermuda",
            "Bhutan",
            "Bolivia",
            "Bosnia and Herzegovina",
            "Botswana",
            "Bouvet Island",
            "Brazil",
            "British Indian Ocean Territory",
            "Brunei Darussalam",
            "Bulgaria",
            "Burkina Faso",
            "Burundi",
            "Cambodia",
            "Cameroon",
            "Canada",
            "Cape Verde",
            "Cayman Islands",
            "Central African Republic",
            "Chad",
            "Chile",
            "China",
            "Christmas Island",
            "Cocos (Keeling) Islands",
            "Colombia",
            "Comoros",
            "Congo",
            "Congo, The Democratic Republic of the",
            "Cook Islands",
            "Costa Rica",
            'Cote D"Ivoire',
            "Croatia",
            "Cuba",
            "Cyprus",
            "Czech Republic",
            "Denmark",
            "Djibouti",
            "Dominica",
            "Dominican Republic",
            "Ecuador",
            "Egypt",
            "El Salvador",
            "Equatorial Guinea",
            "Eritrea",
            "Estonia",
            "Ethiopia",
            "Falkland Islands (Malvinas)",
            "Faroe Islands",
            "Fiji",
            "Finland",
            "France",
            "French Guiana",
            "French Polynesia",
            "French Southern Territories",
            "Gabon",
            "Gambia",
            "Georgia",
            "Germany",
            "Ghana",
            "Gibraltar",
            "Greece",
            "Greenland",
            "Grenada",
            "Guadeloupe",
            "Guam",
            "Guatemala",
            "Guernsey",
            "Guinea",
            "Guinea-Bissau",
            "Guyana",
            "Haiti",
            "Heard Island and Mcdonald Islands",
            "Holy See (Vatican City State)",
            "Honduras",
            "Hong Kong",
            "Hungary",
            "Iceland",
            "India",
            "Indonesia",
            "Iran, Islamic Republic Of",
            "Iraq",
            "Ireland",
            "Isle of Man",
            "Israel",
            "Italy",
            "Jamaica",
            "Japan",
            "Jersey",
            "Jordan",
            "Kazakhstan",
            "Kenya",
            "Kiribati",
            'Korea, Democratic People"S Republic of',
            "Korea, Republic of",
            "Kuwait",
            "Kyrgyzstan",
            'Lao People"S Democratic Republic',
            "Latvia",
            "Lebanon",
            "Lesotho",
            "Liberia",
            "Libyan Arab Jamahiriya",
            "Liechtenstein",
            "Lithuania",
            "Luxembourg",
            "Macao",
            "Macedonia, The Former Yugoslav Republic of",
            "Madagascar",
            "Malawi",
            "Malaysia",
            "Maldives",
            "Mali",
            "Malta",
            "Marshall Islands",
            "Martinique",
            "Mauritania",
            "Mauritius",
            "Mayotte",
            "Mexico",
            "Micronesia, Federated States of",
            "Moldova, Republic of",
            "Monaco",
            "Mongolia",
            "Montenegro",
            "Montserrat",
            "Morocco",
            "Mozambique",
            "Myanmar",
            "Namibia",
            "Nauru",
            "Nepal",
            "Netherlands",
            "Netherlands Antilles",
            "New Caledonia",
            "New Zealand",
            "Nicaragua",
            "Niger",
            "Nigeria",
            "Niue",
            "Norfolk Island",
            "Northern Mariana Islands",
            "Norway",
            "Oman",
            "Pakistan",
            "Palau",
            "Palestinian Territory, Occupied",
            "Panama",
            "Papua New Guinea",
            "Paraguay",
            "Peru",
            "Philippines",
            "Pitcairn",
            "Poland",
            "Portugal",
            "Puerto Rico",
            "Qatar",
            "Reunion",
            "Romania",
            "RWANDA",
            "Saint Helena",
            "Saint Kitts and Nevis",
            "Saint Lucia",
            "Saint Pierre and Miquelon",
            "Saint Vincent and the Grenadines",
            "Samoa",
            "San Marino",
            "Sao Tome and Principe",
            "Saudi Arabia",
            "Senegal",
            "Serbia",
            "Seychelles",
            "Sierra Leone",
            "Singapore",
            "Slovakia",
            "Slovenia",
            "Solomon Islands",
            "Somalia",
            "South Africa",
            "South Georgia and the South Sandwich Islands",
            "Spain",
            "Sri Lanka",
            "Sudan",
            "Suriname",
            "Svalbard and Jan Mayen",
            "Swaziland",
            "Sweden",
            "Switzerland",
            "Syrian Arab Republic",
            "Taiwan, Province of China",
            "Tajikistan",
            "Tanzania, United Republic of",
            "Thailand",
            "Timor-Leste",
            "Togo",
            "Tokelau",
            "Tonga",
            "Trinidad and Tobago",
            "Tunisia",
            "Turkey",
            "Turkmenistan",
            "Turks and Caicos Islands",
            "Tuvalu",
            "Uganda",
            "Ukraine",
            "United Arab Emirates",
            "United Kingdom",
            "United States",
            "United States Minor Outlying Islands",
            "Uruguay",
            "Uzbekistan",
            "Vanuatu",
            "Venezuela",
            "Viet Nam",
            "Virgin Islands, British",
            "Virgin Islands, U.S.",
            "Wallis and Futuna",
            "Western Sahara",
            "Yemen",
            "Zambia",
            "Zimbabwe",
          ];
          const randomCountry = Math.floor(Math.random() * Country.length);

          node.characters = Country[randomCountry];
        }
      }
    }
  }

  createCountry().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
if (figma.command == "hundreds") {
  async function createHundreds(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
          const characters = "1236789";
          function generateHundreds(length) {
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
            generateHundreds(1) + "," + generateHundreds(1) + "00";
        }
      }
    }
  }

  createHundreds().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
if (figma.command == "thousands") {
  async function createThousands(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
          const characters = "1236789";
          function generateThousands(length) {
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
            generateThousands(3) + "," + "0" + generateThousands(2);
        }
      }
    }
  }

  createThousands().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
if (figma.command == "nct") {
  async function createNetworkConnectionType(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
          const NetworkConnectionType = [
            "GPRS",
            "Regular 2G",
            "Good 2G",
            "Regular 3G",
            "Good 3G",
            "Regular 4G / LTE",
            "DSL",
            "Wi-Fi",
          ];
          const randomNetworkConnectionType = Math.floor(
            Math.random() * NetworkConnectionType.length
          );

          node.characters = NetworkConnectionType[randomNetworkConnectionType];
        }
      }
    }
  }

  createNetworkConnectionType().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
if (figma.command == "version") {
  async function createVersion(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
          function generateVersion(length) {
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
            generateVersion(2) +
            "." +
            generateVersion(1) +
            "." +
            generateVersion(1);
        }
      }
    }
  }

  createVersion().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
if (figma.command == "alert-reason") {
  async function createAlertReason(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
          const numbers = "56789";
          function randomPercentage(length) {
            let result = "";
            const numbersLength = numbers.length;
            for (let i = 0; i < length; i++) {
              result += numbers.charAt(
                Math.floor(Math.random() * numbersLength)
              );
            }
            return result;
          }

          const minutes = "23456789";
          function randomMinute(length) {
            let result = "";
            const minutesLength = minutes.length;
            for (let i = 0; i < length; i++) {
              result += minutes.charAt(
                Math.floor(Math.random() * minutesLength)
              );
            }
            return result;
          }

          const alertReason = ["CPU usage", "Failed transaction rate", "Load"];
          const randomAlert = Math.floor(Math.random() * alertReason.length);

          const hostName = [
            "gke-edge-oblt-pool-1-9a60016d-4b34",
            "gke-edge-oblt-pool-1-9a60016d-xd62",
            "gke-edge-oblt-pool-1-9a60016d-vjw6",
            "gke-edge-oblt-pool-1-3b11012g-wyn6",
            "gke-edge-oblt-pool-1-9a50016d-aj23",
            "gke-edge-oblt-pool-1-7a82216d-wjs8",
            "gke-edge-oblt-pool-1-2a27716d-uja2",
            "gke-edge-oblt-pool-1-5a91116d-ojw3",
            "gke-edge-oblt-pool-1-4a60016d-pjp1",
            "gke-edge-oblt-pool-1-7a60016d-slot",
            "gke-edge-oblt-pool-1-9a60016d-slot",
          ];
          const randomHost = Math.floor(Math.random() * hostName.length);

          node.characters =
            alertReason[randomAlert] +
            " is " +
            " 9" +
            randomPercentage(1) +
            "%" +
            " in the last " +
            randomMinute(1) +
            " minutes for " +
            hostName[randomHost] +
            ". " +
            "Alert when > " +
            randomPercentage(2) +
            "%";
        }
      }
    }
  }

  createAlertReason().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
if (figma.command == "alert-status") {
  async function createAlertStatus(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
          const status = ["Active", "Recovered"];
          const randomAlertStatus = Math.floor(Math.random() * status.length);

          node.characters = status[randomAlertStatus];
        }
      }
    }
  }

  createAlertStatus().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
if (figma.command == "alert-source") {
  async function createAlertSource(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
          const source = [
            "gke-edge-oblt-pool-1-9a60016d-4b34",
            "gke-edge-oblt-pool-1-9a60016d-xd62",
            "gke-edge-oblt-pool-1-9a60016d-vjw6",
            "gke-edge-oblt-pool-1-3b11012g-wyn6",
            "gke-edge-oblt-pool-1-9a50016d-aj23",
            "gke-edge-oblt-pool-1-7a82216d-wjs8",
            "gke-edge-oblt-pool-1-2a27716d-uja2",
            "gke-edge-oblt-pool-1-5a91116d-ojw3",
            "gke-edge-oblt-pool-1-4a60016d-pjp1",
            "gke-edge-oblt-pool-1-7a60016d-slot",
            "gke-edge-oblt-pool-1-9a60016d-slot",
            "beat.stats.apm_server.acm.response.valid.ok",
            "beat.stats.apm_server.decoder.deflate.content-length",
            "beat.stats.apm_server.decoder.gzip.count",
            "beat.stats.apm_server.acm.response.errors.unauthorized",
            "beat.stats.apm_server.acm.response.errors.notfound",
            "beat.stats.apm_server.acm.request.count",
            "azure.app_state.browser_timings_total_duration.avg",
            "awsfargate.task_stats.network.*.inbound.bytes",
            "awsfargate.task_stats.memory.fail.coun",
            "awsfargate.task_stats.diskio.total",
            "awsfargate.task_stats.diskio.read.ops",
            "aws.usage.metrics.CallCount.sum",
            "aws.sqs.messages.sent",
            "aws.sns.metrics.NumberOfMessagesPublished.sum",
            "aws.s3_request.errors.4xx",
            "aws.rds.throughput.network_transmit",
            "aws.rds.replica_lag.sec",
            "Hosts",
            "Kubernetes Pods",
            "Docker Containers",
            "EC2 Instances",
            "S3 Buckets",
            "RDS Databases",
            "SQS Queues",
          ];

          const randomSource = Math.floor(Math.random() * source.length);

          node.characters = source[randomSource];
        }
      }
    }
  }

  createAlertSource().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
if (figma.command == "data-field-apm") {
  async function createDataFieldApm(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
          const dataFieldApm = [
            "cloud.availability_zone",
            "cloud.instance.id",
            "cloud.instance.name",
            "cloud.machine.type",
            "cloud.project.id",
            "cloud.project.name",
            "cloud.provider",
            "container.id",
            "cloud.region",
            "container.id",
            "esc.version",
            "transaction.type",
            "transaction.name",
            "url.query",
            "user_agent.name",
            "service.environment",
            "service.name",
            "processor.name",
            "service.version",
            "session.id",
          ];

          const randomDataFieldApm = Math.floor(
            Math.random() * dataFieldApm.length
          );

          node.characters = dataFieldApm[randomDataFieldApm];
        }
      }
    }
  }

  createDataFieldApm().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
if (figma.command == "environment") {
  async function createEnvironment(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
          const envVar = [
            "production",
            "testing",
            "dev",
            "staging",
            "2 environments",
            "8 environments",
            "preprod",
            "locale",
            "Not defined",
            "default",
            "https://www.elastic.co",
            "https://stag.elastic.co",
          ];

          const randomEnv = Math.floor(Math.random() * envVar.length);

          node.characters = envVar[randomEnv];
        }
      }
    }
  }

  createEnvironment().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
if (figma.command == "log-level") {
  async function createLogLevel(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
          const logLevelVar = [
            "all",
            "trace",
            "debug",
            "info",
            "warn",
            "error",
            "fatal",
            "off",
          ];

          const randomLogLevel = Math.floor(Math.random() * logLevelVar.length);

          node.characters = logLevelVar[randomLogLevel];
        }
      }
    }
  }

  createLogLevel().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
if (figma.command == "message") {
  async function createTimestamp(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
          const timeStamp = [
            "App: elastic-marketo-sapi-prod, Deployment 636384d6eb334d587f9b2b11 Latest Timestamp: 1668506911.107 Row: 7, Column: 5:",
            "2023/03/22 10:55:34 [warn] 981#981: *2628922 a client request body is buffered to a temporary file /tmp/client-body/0000011658, client: 193.55.177.53, server: apm-proxy.app.elstc.co, request: POST /intake/v2/rum/events HTTP/2.0, host: apm-proxy.app.elstc.co, referrer: https://www.elastic.co/",
            "App: elastic-etl-api-prod, Deployment 63e29a66de799304d1628079 Latest Timestamp: 1675796070.452 Row: 10, Column: 5:",
            "App: elastic-marketo-sapi-prod, Deployment 63551fd5877f89107bad6638",
            "[ 2][764607.486704] POST http://apm-proxy-be1/intake/v2/rum/events HTTP/1.1 202 793/0 47.686 ok",
            "[ 4][764606.337358] POST http://apm-proxy-be1/intake/v2/rum/events HTTP/1.1 202 663/0 49.737 ok",
            "[ 2][764608.588758] OPTIONS http://apm-proxy-be1/intake/v2/rum/events HTTP/1.1 200 0/0 47.149 ok",
            "[ 2][764608.095404] POST http://apm-proxy-be1/intake/v2/rum/events HTTP/1.1 202 11025/0 55.512 ok",
            "TypeError: Cannot read property 'navigation' of undefined",
            "at loadGetInitialProps (/app/node_modules/next/dist/next-server/lib/utils.js:5:101)",
            "at AnimatedNavbar_AnimatedNavbar.render (/app/.next/server/pages/_app.js:3352:12)",
            "at loadGetInitialProps (/app/node_modules/next/dist/next-server/lib/utils.js:5:101)",
            "at Function.getInitialProps (/app/.next/server/pages/_document.js:149:9)",
            "2023/03/22 10:55:32 oauthproxy.go:796: 10.8.5.145:35532 (159.223.1.201) Cookie _oauth2_proxy_1649867679 not present",
            "2023/03/22 10:55:33 oauthproxy.go:796: 10.8.15.13:48144 (161.35.149.237) Cookie _oauth2_proxy_1649867679 not present",
            "2023/03/22 10:55:33 oauthproxy.go:796: 10.8.5.145:54056 (161.35.149.237) Cookie _oauth2_proxy_1649867679 not present",
            "TypeError: Cannot read property 'navigation' of undefined",
          ];

          const randomTimestamp = Math.floor(Math.random() * timeStamp.length);

          node.characters = timeStamp[randomTimestamp];
        }
      }
    }
  }

  createTimestamp().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
if (figma.command == "profiling-function") {
  async function createProfilingFunction(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
          const profilingFunction = [
            "vmlinux: __lock_text_start",
            "JVM/Hotspot: vtable chunks",
            "JVM/Hotspot: StubRoutines (2)",
            "vmlinux: copy_user_enhanced_fast_string",
            "auditbeat",
            "libz.so.1.2.11",
            "JVM/Hotspot: int java.lang.StringLatin1.hashCode(byte[])",
            "pf-host-agent",
            "JVM/Hotspot: java.lang.Object java.util.HashMap.putVal(int, java.lang.Object, java.lang.Object, boolean, boolean)",
            "JVM/Hotspot: java.util.HashMap$Node[] java.util.HashMap.resize()",
            "auditbeat",
            "metricbeat",
            "vmlinux: __seccomp_filter",
            "vmlinux: clear_page_erms",
            "libpthread-2.31.so",
            "containerd",
            "JVM/Hotspot: java.lang.Object java.util.HashMap$EntryIterator.next()",
          ];

          const randomProfilingFunction = Math.floor(
            Math.random() * profilingFunction.length
          );

          node.characters = profilingFunction[randomProfilingFunction];
        }
      }
    }
  }

  createProfilingFunction().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
if (figma.command == "profiling-source-file") {
  async function createProfilingSourceFile(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();
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
          const sourceFile = [
            "vmlinux+0xa75ab4",
            "<unsymbolized>",
            "vmlinux+0xcc9c8",
            "StringLatin1.java#193",
            "HashMap.java#669",
            "StringHelper.java#165",
            "IndexingChain.java#566",
            "pf-host-agent+0x468e",
            "HashMap.java#684",
            "UTF8StreamJsonParser.java#2554",
            "metricbeat+0x2826abe",
            "FreqProxTermsWriterPerField.java#142",
            "containerd+0x1165782",
            "LZ4.java#555",
            "LZ4.java#225",
            "<unsymbolized>",
            "ArraysSupport.java#298",
          ];

          const randomSourceFile = Math.floor(
            Math.random() * sourceFile.length
          );

          node.characters = sourceFile[randomSourceFile];
        }
      }
    }
  }

  createProfilingSourceFile().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
if (figma.command == "timestamp") {
  async function createRandomTimestamp(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();

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
          const months = ["Jan", "Feb", "Mar"];
          const randomMonthIndex = Math.floor(Math.random() * months.length);
          const randomMonth = months[randomMonthIndex];

          const year = 2023;

          function Day(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
          const randomDay = Day(10, 31);

          function Minutes(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
          const randomMinute = Day(10, 59);

          function Hours(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
          const randomHour = Hours(14, 19);

          const hours = Math.floor(Math.random() * 12);
          const seconds = Math.floor(Math.random() * 60);
          const milliseconds = Math.floor(Math.random() * 999);

          node.characters = `${randomMonth} ${randomDay}, ${year} @ ${randomHour}:${randomMinute}:${seconds}.${milliseconds}`;
        }
      }
    }
  }

  createRandomTimestamp().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
if (figma.command == "co2") {
  async function createCO2(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();

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
          const characters = "1236789";
          function generateC02(length) {
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
            generateC02(3) +
            "." +
            generateC02(2) +
            " " +
            "lbs" +
            " " +
            "/" +
            " " +
            generateC02(2) +
            "." +
            generateC02(2) +
            " " +
            "kg";
        }
      }
    }
  }

  createCO2().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
if (figma.command == "dollar") {
  async function createDollar(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();

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
          const characters = "1236789";
          function generateDollar(length) {
            let result = "";
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
              result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
              );
            }
            return result;
          }

          node.characters = generateDollar(3) + "." + generateDollar(2) + "$";
        }
      }
    }
  }

  createDollar().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
if (figma.command == "region") {
  async function createRegion(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();

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
          const region = [
            "us-west1",
            "us-west2",
            "us-west3",
            "us-west4",
            "us-west5",
            "us-west6",
            "us-west7",
            "us-west8",
            "europe-west1",
            "europe-west2",
            "europe-west3",
            "europe-west4",
            "europe-west5",
            "europe-west6",
            "europe-west7",
            "europe-west8",
            "europe-east1",
            "europe-east2",
            "europe-east3",
            "europe-east4",
            "europe-east5",
            "europe-east6",
            "europe-east7",
            "europe-east8",
            "asia-east1",
            "asia-east2",
            "asia-east3",
            "asia-east4",
            "asia-east5",
            "me-central1",
            "me-central2",
            "me-central3",
            "me-central4",
            "me-central5",
            "me-central6",
            "africa-south1",
            "us-east1",
            "us-east2",
            "us-north1",
            "us-north2",
            "us-north3",
            "us-north4",
            "us-north5",
            "us-north6",
            "us-north7",
            "us-north8",
            "us-east3",
            "us-east4",
            "us-east5",
            "us-east6",
            "us-east7",
            "us-east8",
          ];

          const randomRegion = Math.floor(Math.random() * region.length);

          node.characters = region[randomRegion];
        }
      }
    }
  }

  createRegion().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}

if (figma.command == "email") {
  async function createEmail(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();

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
          const email = [
            "devops_master",
            "sysadmin_guru",
            "automate_ninja",
            "code_whisperer",
            "infra_architect",
            "deploy_wizard",
            "container_captain",
            "orchestration_pro",
            "monitor_mage",
            "resilience_expert",
            "troubleshoot_titan",
            "global-sre-ops",
            "global-sre-dev-ops",
          ];

          const randomEmail = Math.floor(Math.random() * email.length);

          node.characters = email[randomEmail] + "@elastic.co";
        }
      }
    }
  }

  createEmail().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}

if (figma.command == "cloud-provider") {
  async function createCloudProvider(): Promise<string | undefined> {
    await loadMonospaceFont();
    await loadSansSerifFont();

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
          const cloud = [
            "Amazon Web Services (AWS)",
            "Microsoft Azure",
            "Google Cloud Platform (GCP)",
            "IBM Cloud",
            "Oracle Cloud",
            "Alibaba Cloud",
            "SAP Cloud",
            "Linode",
            "Heroku",
            "Salesforce",
            "DigitalOcean",
            "Linode",
          ];

          const randomCloudProvider = Math.floor(Math.random() * cloud.length);

          node.characters = cloud[randomCloudProvider];
        }
      }
    }
  }

  createCloudProvider().then((message: string | undefined) => {
    figma.closePlugin(message);
  });
}
