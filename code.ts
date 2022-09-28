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
} else if (figma.command == "duration-ms") {
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
} else if (figma.command == "host-name") {
  async function createHostName(): Promise<string | undefined> {
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
} else if (figma.command == "duration-s") {
  async function createDurationSec(): Promise<string | undefined> {
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
} else if (figma.command == "android-version") {
  async function createAndroidVersion(): Promise<string | undefined> {
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
} else if (figma.command == "ios-version") {
  async function createIosVersion(): Promise<string | undefined> {
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
} else if (figma.command == "apple-mobile-device") {
  async function createMobileDeviceApple(): Promise<string | undefined> {
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
} else if (figma.command == "android-mobile-device") {
  async function createMobileDeviceAndroid(): Promise<string | undefined> {
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
} else if (figma.command == "browser") {
  async function createBrowser(): Promise<string | undefined> {
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
} else if (figma.command == "country") {
  async function createCountry(): Promise<string | undefined> {
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
