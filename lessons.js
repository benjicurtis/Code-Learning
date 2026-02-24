// Code - Lesson Curriculum (500 lessons per category)
const LESSON_CONFIG = {
  javascript: {
    name: 'JavaScript',
    icon: '',
    topics: [
      { base: 'Variables and types', items: ['let and const', 'var hoisting', 'primitive types', 'typeof', 'null vs undefined', 'type coercion', 'strings', 'numbers', 'booleans', 'symbols'] },
      { base: 'Functions', items: ['function declarations', 'arrow functions', 'parameters', 'return values', 'scope', 'closures', 'callbacks', 'IIFEs', 'higher-order functions', 'recursion'] },
      { base: 'Arrays', items: ['creating arrays', 'accessing elements', 'push and pop', 'shift and unshift', 'splice', 'slice', 'map', 'filter', 'reduce', 'iteration methods'] },
      { base: 'Objects', items: ['object literals', 'dot vs bracket notation', 'adding properties', 'deleting properties', 'object spread', 'destructuring', 'computed properties', 'methods', 'this keyword', 'prototypes intro'] },
      { base: 'Control flow', items: ['if/else', 'switch', 'ternary operator', 'for loops', 'while loops', 'for...of', 'for...in', 'break and continue', 'nested loops', 'error handling'] },
      { base: 'DOM manipulation', items: ['querySelector', 'getElementById', 'creating elements', 'appending', 'removing', 'classList', 'attributes', 'innerHTML vs textContent', 'events', 'event delegation'] },
      { base: 'Async JavaScript', items: ['callbacks', 'setTimeout', 'setInterval', 'Promises', 'async/await', 'fetch API', 'error handling async', 'Promise.all', 'microtasks', 'event loop basics'] },
      { base: 'ES6+ features', items: ['template literals', 'destructuring', 'rest parameters', 'spread operator', 'default parameters', 'classes', 'modules', 'optional chaining', 'nullish coalescing', 'iterators'] },
      { base: 'Browser APIs', items: ['localStorage', 'sessionStorage', 'location', 'history', 'navigator', 'geolocation', 'notifications', 'clipboard', 'fullscreen', 'visibility API'] },
      { base: 'Best practices', items: ['naming conventions', 'avoiding globals', 'module patterns', 'debugging', 'testing basics', 'performance', 'security', 'accessibility', 'code organization', 'documentation'] }
    ]
  },
  css: {
    name: 'CSS',
    icon: '',
    topics: [
      { base: 'Selectors', items: ['element selector', 'class selector', 'ID selector', 'descendant', 'child', 'adjacent', 'attribute', 'pseudo-classes', 'pseudo-elements', 'specificity'] },
      { base: 'Box model', items: ['width and height', 'padding', 'margin', 'border', 'box-sizing', 'overflow', 'min/max dimensions', 'auto margins', 'collapse', 'shorthand'] },
      { base: 'Layout', items: ['display', 'block vs inline', 'flexbox basics', 'flex direction', 'flex wrap', 'justify-content', 'align-items', 'gap', 'flex grow/shrink', 'grid intro'] },
      { base: 'Positioning', items: ['static', 'relative', 'absolute', 'fixed', 'sticky', 'z-index', 'stacking context', 'centering', 'overlay patterns', 'practical examples'] },
      { base: 'Typography', items: ['font-family', 'font-size', 'font-weight', 'line-height', 'letter-spacing', 'text-align', 'text-decoration', 'color', 'web fonts', 'variable fonts'] },
      { base: 'Colors', items: ['hex', 'rgb/rgba', 'hsl/hsla', 'color keywords', 'currentColor', 'opacity', 'gradients', 'color contrast', 'theming', 'dark mode'] },
      { base: 'Responsive design', items: ['media queries', 'viewport', 'mobile-first', 'breakpoints', 'responsive images', 'flexible units', 'clamp', 'container queries', 'responsive typography', 'touch targets'] },
      { base: 'Transitions and animations', items: ['transition property', 'transition duration', 'keyframes', 'animation property', 'easing', 'transform', 'translate', 'scale', 'rotate', 'performance'] },
      { base: 'Grid', items: ['grid template', 'grid columns', 'grid rows', 'grid gap', 'grid placement', 'grid areas', 'auto-fit', 'auto-fill', 'nested grid', 'practical layouts'] },
      { base: 'Advanced CSS', items: ['custom properties', 'calc', 'clamp', 'aspect-ratio', 'container queries', 'logical properties', 'scroll-snap', 'backdrop-filter', 'blend modes', 'modern features'] }
    ]
  },
  python: {
    name: 'Python',
    icon: '',
    topics: [
      { base: 'Variables and data types', items: ['integers', 'floats', 'strings', 'booleans', 'None', 'type function', 'type conversion', 'variables', 'naming', 'comments'] },
      { base: 'Operators', items: ['arithmetic', 'comparison', 'logical', 'assignment', 'membership', 'identity', 'operator precedence', 'chained comparisons', 'walrus operator', 'bitwise intro'] },
      { base: 'Strings', items: ['indexing', 'slicing', 'concatenation', 'format', 'f-strings', 'escape sequences', 'string methods', 'multiline strings', 'raw strings', 'encoding'] },
      { base: 'Lists', items: ['creating lists', 'indexing', 'slicing', 'append', 'extend', 'insert', 'remove', 'pop', 'list comprehension', 'nested lists'] },
      { base: 'Control flow', items: ['if/elif/else', 'for loops', 'range', 'while loops', 'break', 'continue', 'pass', 'match statement', 'nested conditionals', 'short circuit'] },
      { base: 'Functions', items: ['def keyword', 'parameters', 'return', 'default arguments', 'keyword arguments', '*args', '**kwargs', 'scope', 'lambda', 'docstrings'] },
      { base: 'Dictionaries', items: ['dict creation', 'accessing values', 'adding keys', 'dict methods', 'iteration', 'nested dicts', 'dict comprehension', 'get method', 'keys and values', 'merge'] },
      { base: 'Modules', items: ['import', 'from import', 'standard library', 'math', 'random', 'datetime', 'os', 'sys', 'creating modules', 'pip intro'] },
      { base: 'File handling', items: ['open function', 'read', 'write', 'append', 'with statement', 'context managers', 'JSON', 'CSV basics', 'pathlib', 'error handling'] },
      { base: 'OOP and more', items: ['classes', 'init', 'self', 'methods', 'inheritance', 'encapsulation', 'exceptions', 'try/except', 'list comprehension', 'generators intro'] }
    ]
  },
  html: {
    name: 'HTML',
    icon: '',
    topics: [
      { base: 'Document structure', items: ['DOCTYPE', 'html tag', 'head', 'body', 'meta tags', 'title', 'charset', 'viewport', 'lang attribute', 'document outline'] },
      { base: 'Text content', items: ['headings', 'paragraphs', 'bold and italic', 'lists', 'definition lists', 'blockquote', 'pre and code', 'line breaks', 'horizontal rule', 'semantic text'] },
      { base: 'Links', items: ['anchor tag', 'href', 'target', 'relative vs absolute', 'internal links', 'download attribute', 'mailto', 'tel', 'link best practices', 'accessibility'] },
      { base: 'Images', items: ['img tag', 'src', 'alt', 'width and height', 'loading', 'picture element', 'srcset', 'formats', 'responsive images', 'image optimization'] },
      { base: 'Tables', items: ['table structure', 'tr td th', 'thead tbody tfoot', 'colspan rowspan', 'caption', 'styling tables', 'accessibility', 'when to use', 'sortable tables', 'responsive tables'] },
      { base: 'Forms', items: ['form tag', 'input types', 'labels', 'placeholder', 'required', 'select', 'textarea', 'checkbox', 'radio', 'button'] },
      { base: 'Semantic HTML', items: ['header', 'footer', 'main', 'nav', 'article', 'section', 'aside', 'figure', 'figcaption', 'time'] },
      { base: 'Multimedia', items: ['audio tag', 'video tag', 'source', 'tracks', 'iframe', 'embed', 'object', 'autoplay', 'controls', 'accessibility'] },
      { base: 'Attributes', items: ['id and class', 'data attributes', 'aria attributes', 'role', 'tabindex', 'hidden', 'contenteditable', 'draggable', 'spellcheck', 'custom attributes'] },
      { base: 'Best practices', items: ['accessibility', 'SEO basics', 'validation', 'structure', 'naming', 'comments', 'minimal markup', 'progressive enhancement', 'performance', 'mobile-first'] }
    ]
  }
};

// Learn-only paths – read content, no code to type
const INFO_PATHS = {
  understandingComputers: {
    name: 'Understanding Computers',
    icon: '',
    desc: 'Learn how computers work, step by step',
    lessons: [
      { id: 1, num: 1, title: 'What is a Computer?', content: 'A computer is an electronic machine that takes **input**, **processes** it using instructions (programs), and produces **output**. This is called the input-process-output model, and every computer follows it.\n\n**Input** is anything you put into the computer: keystrokes, mouse clicks, voice, photos. **Processing** happens when the CPU runs programs on that data—comparing, calculating, and transforming it. **Output** is the result: text on a screen, sound from speakers, or a printed page.\n\n**Why it matters:** Understanding this flow helps you see how every app, game, or website is just input going in, processing happening, and output coming out. When you type and click, you are providing input; when the screen updates, you are seeing output.' },
      { id: 2, num: 2, title: 'Hardware vs Software', content: '**Hardware** is the physical parts you can touch: the case, screen, keyboard, motherboard, chips. If you can pick it up, it is hardware.\n\n**Software** is the programs and data that tell the hardware what to do. Code, apps, the operating system, and your files are all software. You cannot touch software; it exists as patterns stored in memory.\n\n**The relationship:** Hardware without software cannot do anything useful. Software without hardware has nowhere to run. Microsoft Word is software; the keyboard is hardware. When you install a program, you add software. When you upgrade RAM, you change hardware.' },
      { id: 3, num: 3, title: 'The CPU', content: 'The **CPU** (Central Processing Unit) is the brain of the computer. It runs the instructions that make programs work.\n\n**What it does:** The CPU fetches instructions from memory, decodes them, executes them, and stores results. This happens billions of times per second. Clock speed (e.g., 3 GHz) tells you how many cycles per second.\n\n**Cores:** Modern CPUs have multiple cores—separate processors on one chip. A 4-core CPU can run up to four tasks at once, which helps when you multitask.\n\n**Takeaway:** The CPU is what runs your programs. RAM holds data; storage holds files; but the CPU does the calculations and decisions.' },
      { id: 4, num: 4, title: 'Memory (RAM)', content: '**RAM** (Random Access Memory) is temporary storage the CPU uses while working. Data in RAM is fast to access but is lost when the computer turns off. More RAM usually means your computer can run more programs smoothly at the same time.' },
      { id: 5, num: 5, title: 'Storage', content: '**Storage** holds your files when the computer is off. Unlike RAM, data stays until you delete it.\n\n**Hard drives (HDDs)** use spinning disks. They are cheaper but slower. **SSDs** use flash memory—no moving parts. They are faster, quieter, and more durable. Most modern computers use SSDs for the main drive.\n\n**Capacity:** 256 GB is a minimum; 512 GB or 1 TB is better for lots of apps and files.\n\n**Takeaway:** Storage is your long-term filing system. RAM is for what you are doing now; storage is for what you keep for later.' },
      { id: 6, num: 6, title: 'Input Devices', content: '**Input devices** send information into the computer. They turn your actions into data the machine can use.\n\n**Keyboard:** Converts key presses into characters and commands. **Mouse:** Reports movement and clicks so the computer can move the cursor and trigger actions. **Touchscreen:** Combines display and input; your finger position is read as coordinates.\n\n**Microphone, camera, scanner:** Turn sound, images, and paper into digital data. Voice, photos, and documents become files the computer can process.\n\n**Takeaway:** Every way you interact—typing, clicking, speaking—goes through an input device that turns it into digital data.' },
      { id: 7, num: 7, title: 'Output Devices', content: '**Output devices** present results from the computer in a form you can see, hear, or feel.\n\n**Monitor:** Shows text, images, and video. Resolution (e.g., 1920×1080) is the number of pixels; more pixels usually mean a sharper display.\n\n**Speakers and headphones:** Play sound. Music, alerts, and voice calls come from the computer through audio output.\n\n**Printer:** Puts text and images on paper. The computer sends digital data; the device turns it into light, sound, or ink on paper.\n\n**Takeaway:** Output is how the computer communicates back to you. Without output devices, you could not see or hear what the computer is doing.' },
      { id: 8, num: 8, title: 'The Motherboard', content: 'The **motherboard** is the main circuit board that connects and powers the main components.\n\n**What it holds:** The CPU socket, RAM slots, storage connectors (SATA, NVMe), expansion slots (for graphics cards), and ports (USB, HDMI, audio). The chipset manages data flow between these parts.\n\n**Role:** The motherboard provides electrical connections so the CPU, RAM, storage, and peripherals can work together. Without it, the parts could not communicate.\n\n**Form factors:** Motherboards come in sizes like ATX and mini-ITX. The size affects how many slots and ports are available.\n\n**Takeaway:** The motherboard is the backbone of the system. Choosing a compatible motherboard is essential when building or upgrading a PC.' },
      { id: 9, num: 9, title: 'Operating Systems', content: 'An **operating system** (OS) is the main software that manages the computer. Windows, macOS, and Linux are common examples.\n\n**What it does:** The OS runs programs, manages files and folders, handles input and output, and controls access. It sits between you and the hardware.\n\n**Without an OS:** You would have no desktop, no file browser, and no way to start applications. The hardware would be unusable for normal tasks.\n\n**Common tasks:** Booting the computer, scheduling programs, managing memory, handling networks, and providing the user interface (icons, windows, menus) are all done by the OS.\n\n**Takeaway:** The OS is the foundation everything else runs on. Apps are built to work with a specific OS, so your choice affects what software you can use.' },
      { id: 10, num: 10, title: 'Binary: How Computers Think', content: 'Computers use **binary**—only 0s and 1s. Each digit is a **bit**. Eight bits form a **byte**.\n\n**Why binary?** Electronic circuits are easiest to build with two states: on/off. Binary maps to that: 1 = on, 0 = off.\n\n**Representing data:** Letters, numbers, colors, and instructions are all stored as patterns of bits. For example, the letter "A" might be 01000001 in ASCII. A photo is millions of numbers, each representing a pixel\'s color.\n\n**Reliability:** Binary is simple and robust. Slight electrical noise rarely flips a 0 to 1 or vice versa, so data stays accurate.\n\n**Takeaway:** Everything in a computer—programs, files, images—is ultimately a long string of 0s and 1s. Binary is the language of digital hardware.' }
    ]
  },
  howTheInternetWorks: {
    name: 'How the Internet Works',
    icon: '',
    desc: 'Understand the internet, step by step',
    lessons: [
      { id: 1, num: 1, title: 'What is the Internet?', content: 'The **internet** is a global network of connected computers. No single company or government owns it—it is made of many smaller networks that agree to talk to each other.\n\n**How you connect:** Your device (phone, laptop) connects through cables or Wi-Fi to an **ISP** (Internet Service Provider). The ISP connects to other providers, who connect to more providers. Your data can reach almost any other connected device in the world.\n\n**What flows on it:** Web pages, email, video calls, file transfers. All of it travels as digital data—packets of 0s and 1s—over wires, fiber-optic cables, and wireless signals.\n\n**Takeaway:** The internet is like a huge postal system for data. Your device is one address; every website and service is another. The network routes your requests and delivers the responses.' },
      { id: 2, num: 2, title: 'Servers and Clients', content: '**Client** and **server** describe roles, not physical machines. The **client** asks for data; the **server** provides it.\n\n**Your device is the client:** When you visit a website, your browser sends a request: "Give me this page." Your device receives the response and displays it.\n\n**Web servers host content:** A server stores the website files (HTML, images, etc.) and sends them when requested. One server can serve thousands of clients at once.\n\n**The flow:** You type a URL → your client sends a request → the server receives it → the server sends back the page → your client displays it. This happens every time you load a page or click a link.\n\n**Takeaway:** Almost everything you do online involves your client requesting something and a server (or many servers) responding. Even "the cloud" is servers running somewhere else.' },
      { id: 3, num: 3, title: 'IP Addresses', content: 'An **IP address** is a unique identifier for a device on a network. Think of it like a street address for computers.\n\n**Format:** IPv4 addresses look like 192.168.1.1 (four numbers separated by dots). IPv6 addresses are longer and support many more devices as the internet grows.\n\n**How it works:** When you send a request (e.g., load a website), your data includes your IP (return address) and the destination IP. Routers along the way use the destination IP to forward packets toward the right place.\n\n**Public vs private:** Your home router has a public IP (visible to the internet). Devices on your home network get private IPs (e.g., 192.168.1.100) that only your router uses internally.\n\n**Takeaway:** IP addresses are how the internet knows where to send data. Without them, packets would have no destination.' },
      { id: 4, num: 4, title: 'DNS: The Phonebook', content: '**DNS** (Domain Name System) turns domain names like google.com into IP addresses. Computers need IPs to connect; humans prefer names.\n\n**What happens:** When you type google.com, your device asks a DNS server: "What is the IP for google.com?" The DNS server replies with an address (e.g., 142.250.80.46). Your browser then connects to that IP.\n\n**Why it matters:** You do not need to memorize numbers. DNS does the lookup in milliseconds, usually without you noticing.\n\n**Caching:** Your device and router often cache DNS results so repeated visits to the same site do not require a new lookup every time.\n\n**Takeaway:** DNS is the phonebook of the internet. It translates the names you type into the numbers the network needs.' },
      { id: 5, num: 5, title: 'Packets', content: 'Data on the internet travels in small **packets**. A large file or message is split into many packets, sent separately, and reassembled at the destination.\n\n**Why packets?** Networks are shared. If one huge file blocked the line, nothing else could get through. Packets let many users share the same links. Each packet can take a different path if needed.\n\n**Packet structure:** A packet has a **header** (source, destination, sequence number) and a **payload** (the actual data). The header tells routers where to send it and how to order it when it arrives.\n\n**Lost packets:** If a packet is lost or damaged, the receiver can ask for it again. Protocols like TCP handle retransmission automatically.\n\n**Takeaway:** Everything you send or receive online is broken into packets, travels across the network, and is put back together. Packet switching is what makes the internet flexible and resilient.' },
      { id: 6, num: 6, title: 'HTTP and HTTPS', content: '**HTTP** is the protocol for loading web pages. **HTTPS** adds encryption – the padlock in your browser. With HTTPS, data is scrambled so others cannot easily read it. Always prefer HTTPS when possible.' },
      { id: 7, num: 7, title: 'Routers', content: 'A **router** forwards data between networks. It reads the destination address in each packet and sends it toward the right place.\n\n**Your home router:** Connects your devices (phones, laptops) to each other and to your ISP. It gives each device a local IP, translates between your network and the internet (NAT), and often provides Wi-Fi.\n\n**Internet routers:** Large routers at ISPs and data centers move traffic between networks. They use routing tables to choose the best path. If one path is congested, they can send packets another way.\n\n**How routing works:** A router does not know the full path. It only knows: "To reach this destination, send the packet to that next router." Step by step, packets reach their destination.\n\n**Takeaway:** Routers are the traffic directors of the internet. Without them, data would not know which way to go.' },
      { id: 8, num: 8, title: 'Wi‑Fi vs Ethernet', content: '**Ethernet** sends data through a cable (usually copper or fiber). **Wi‑Fi** sends data through the air using radio waves. Both connect you to the same internet; the difference is how the signal travels.\n\n**Ethernet:** Typically faster and more stable. No interference from walls or other devices. Requires a cable from your device to the router. Best for desktops, game consoles, and when you need reliable speed.\n\n**Wi‑Fi:** Wireless, so you can move around. Convenient for laptops and phones. Can be slower or less stable due to distance, walls, and other Wi‑Fi networks. Signal strength varies.\n\n**Choosing:** For sensitive work or gaming, Ethernet is often better. For general browsing and mobility, Wi‑Fi is usually fine. Many people use Ethernet for key devices and Wi‑Fi for the rest.\n\n**Takeaway:** Ethernet = cable, stability, speed. Wi‑Fi = wireless, convenience, sometimes trade-offs. Both reach the same internet.' },
      { id: 9, num: 9, title: 'Browsers', content: 'A **browser** (Chrome, Firefox, Safari) requests web pages from servers, receives HTML and other files, and renders them on your screen. It also runs JavaScript and manages bookmarks, history, and security.' },
      { id: 10, num: 10, title: 'Cloud and Hosting', content: '**Hosting** means storing website files on a server that is always connected to the internet. When someone visits your site, the server sends those files to their browser.\n\n**Types of hosting:** Shared hosting (many sites on one server), VPS (virtual private server with more control), and dedicated servers (your own machine). For small sites, shared hosting or platforms like Netlify or GitHub Pages are common.\n\n**Cloud** extends this idea: instead of one physical server, your data and apps run on a network of servers. Providers like AWS, Google Cloud, and Azure rent you computing power, storage, and services. "The cloud" means "someone else\'s servers, accessed over the internet."\n\n**Why use it:** No need to buy or maintain your own servers. You pay for what you use. Providers handle uptime, backups, and scaling.\n\n**Takeaway:** Hosting puts your website on a server. The cloud is a flexible way to run apps and store data on remote servers you access online.' }
    ]
  },
  gameDesign: generateGameDesignLessons(),
  hacker: generateHackerLessons(),
  classes: generateClassesLessons(),
  programmingBasics: {
    name: 'Programming Basics',
    icon: '',
    desc: 'Core concepts before you code',
    lessons: [
      { id: 1, num: 1, title: 'What is Programming?', content: '**Programming** is writing instructions for a computer. You use a programming language (like Python or JavaScript) to describe steps the computer should follow. A compiler or interpreter turns your code into actions the machine can run.\n\n**What programs do:** They automate tasks (sort a list, send an email), build applications (websites, games, tools), and solve problems (find a path, analyze data). Every app you use is a program—or many programs working together.\n\n**The process:** You write code in a text editor or IDE. You run it. If there are errors, you read the messages, fix the code, and run again. This cycle of write, run, debug is how most programming works.\n\n**Takeaway:** Programming is about breaking problems into small steps and expressing those steps in a language the computer understands. Start with simple programs and build from there.' },
      { id: 2, num: 2, title: 'Variables', content: 'A **variable** is a named container for data. You assign a value once and use the name whenever you need it.\n\n**Syntax:** In most languages, you write something like `name = "Alice"` or `count = 10`. The name goes on the left; the value on the right. From then on, `name` refers to "Alice" and `count` refers to 10.\n\n**Why use them:** Variables let you store results, reuse values, and make code easier to change. If the value is in one place, you update it once instead of everywhere.\n\n**They can change:** In many languages, you can assign a new value: `count = 11`. That is why they are called variables—they can vary. Constants, by contrast, do not change after they are set.\n\n**Takeaway:** Variables are the basic way to hold and reference data in a program. Learn how your language declares and assigns them.' },
      { id: 3, num: 3, title: 'Functions', content: 'A **function** is a reusable block of code with a name. You define it once, then call it whenever you need that behavior.\n\n**Structure:** A function has a name, optional parameters (inputs), and a body (the code that runs). It may return a value. For example, `add(a, b)` might take two numbers and return their sum.\n\n**Why use them:** Functions avoid repetition. If you need the same logic in three places, put it in a function and call it three times. They also organize code: each function handles one task, making the program easier to read and maintain.\n\n**Calling:** You invoke a function by its name and pass arguments: `result = add(3, 5)`. The function runs and its return value (if any) is used where it was called.\n\n**Takeaway:** Functions are the main tool for structuring code. Break your program into small, clear functions that do one thing each.' },
      { id: 4, num: 4, title: 'Logic: If and Else', content: '**If/else** lets programs make decisions. If a condition is true, run one block of code; otherwise, run another.\n\n**Syntax:** Typically you write `if (condition) { ... } else { ... }`. The condition is a boolean expression: `x > 5`, `name == "Alice"`, or a combination with and/or.\n\n**Comparisons:** Use `==` for equality, `!=` for not equal, `>`, `<`, `>=`, `<=` for ordering. Some languages also have `===` for strict equality (same value and type).\n\n**Why it matters:** Without conditions, a program would always do the same thing. If/else lets it adapt: show a different message, take a different path, or handle errors based on what is true.\n\n**Takeaway:** Conditions and if/else are how programs branch. Master comparisons and boolean logic—they appear in almost every program.' },
      { id: 5, num: 5, title: 'Loops', content: '**Loops** repeat a block of code. Instead of writing the same lines many times, you put them inside a loop that runs until a condition is met or a collection is finished.\n\n**Two main types:** A **for** loop often runs a set number of times or iterates over a list: "for each item, do this." A **while** loop runs while a condition is true: "keep doing this until something changes."\n\n**Examples:** Process every element in an array. Retry a request until it succeeds. Animate a game frame by frame. Loops are essential whenever you need to repeat work.\n\n**Avoid infinite loops:** If the condition never becomes false (or the loop never reaches the end), the loop runs forever. Make sure the condition will eventually change or that you break out when done.\n\n**Takeaway:** Loops handle repetition. Use for-loops when you know the structure (e.g., each item); use while when you are waiting for a condition to change.' },
      { id: 6, num: 6, title: 'Data Types', content: '**Data types** categorize the kinds of values your program works with. Each type has its own rules and operations.\n\n**Common types:** **Numbers** (integers like 42, decimals like 3.14) for math. **Strings** (text in quotes) for words and messages. **Booleans** (true/false) for conditions. **Lists or arrays** (ordered collections) for multiple items. **Objects or dictionaries** for key-value pairs.\n\n**Why it matters:** You cannot add a string and a number the same way you add two numbers. The language defines what is allowed. Type errors happen when you use a value in a way that does not match its type.\n\n**Type conversion:** Many languages let you convert: turn "42" into 42, or 42 into "42". Knowing how to convert helps when you receive data in one form and need another.\n\n**Takeaway:** Understand the basic types in your language. Check the type of your variables when something behaves unexpectedly.' },
      { id: 7, num: 7, title: 'Debugging', content: '**Debugging** is finding and fixing errors. Read error messages, add print/log statements, use a debugger, and test small parts. Bugs are normal – learning to debug is a key programming skill.' },
      { id: 8, num: 8, title: 'Algorithms', content: 'An **algorithm** is a clear, step-by-step procedure for solving a problem. "Sort a list," "find the shortest path," "search for a name"—each has algorithms that produce the right result.\n\n**Properties of good algorithms:** They are **correct** (solve the problem), **efficient** (reasonable time and memory), and **understandable** (you or someone else can follow the logic).\n\n**Examples:** To find the largest number in a list, scan through and keep track of the maximum so far. To sort, you might use approaches like bubble sort (simple but slow) or quicksort (faster for large data).\n\n**You do not always invent them:** Many algorithms are well-known. Learn common ones (search, sort, recursion) and when to apply them. Libraries often implement efficient versions.\n\n**Takeaway:** Algorithms are the logic behind your code. Start with clear steps, then refine for correctness and efficiency.' },
      { id: 9, num: 9, title: 'Comments and Readability', content: '**Comments** are notes in your code that the computer ignores. They exist for humans—to explain *why* something was done, not *what* (the code should show that).\n\n**When to comment:** Explain non-obvious logic, document tricky workarounds, or add a brief summary at the top of a function. Avoid stating the obvious: `i++;  // increment i` adds nothing.\n\n**Readable code is better:** Clear variable and function names often remove the need for comments. `totalPrice` is better than `x`. `calculateDiscount(price, rate)` is self-explanatory. Structure your code so the flow is easy to follow.\n\n**Style:** Follow your language\'s conventions. Some use `//` for single lines and `/* */` for blocks. Keep comments up to date—outdated comments mislead more than no comments.\n\n**Takeaway:** Write for humans first. Use comments for intent and non-obvious logic. Use clear names and structure to make the code speak for itself.' },
      { id: 10, num: 10, title: 'Practice Makes Progress', content: 'You learn programming by writing and debugging code. Reading and tutorials help, but they are not enough without doing.\n\n**Start small:** Build simple programs first—a calculator, a to-do list, a small game. Each project teaches something new.\n\n**Break things:** Change code and see what happens. Errors teach you how the language works. Experimenting builds intuition.\n\n**Consistency helps:** A little practice every day beats long sessions once a week. Regular exposure keeps concepts fresh.\n\n**Do not fear mistakes:** Bugs and failures are part of learning. Every expert has written buggy code. The difference is they kept going. **Takeaway:** Code every day if you can. Build projects, fix errors, iterate. Progress comes from practice.' }
    ]
  },
  stockMarket: generateStockMarketLessons()
};

function generateGameDesignLessons() {
  const CONTENT = {
    'How Nintendo designs for fun': 'Nintendo prioritizes **accessible fun** over realism. Their philosophy: anyone should be able to pick up and enjoy. They focus on clear goals, responsive controls, and immediate feedback. Games like Mario and Kirby teach through play—no manual needed. Lessons: simplicity beats complexity; juice (screenshake, sound, particles) makes actions feel good; failure should feel fair, not punishing. Apply this by asking: "Can a newcomer have fun in the first minute?"',
    'How FromSoftware designs difficulty': 'FromSoftware (Dark Souls, Elden Ring) designs **intentional difficulty**. Challenges are surmountable but demand attention. Death teaches: you learn patterns, spacing, and when to commit. The world is interconnected; shortcuts reward exploration. No difficulty sliders—one designed experience. Lessons: clarity in rules; failure as feedback; reward mastery. Apply: make hard moments teach something, not just punish.',
    'How Blizzard designs multiplayer': 'Blizzard focuses on **readability and fairness** in multiplayer. Clear telegraphs so you can react; counterplay for every strong ability. Matchmaking keeps skill levels close. Social tools (chat, groups) reduce friction. Lessons: players should understand why they lost; avoid "feel-bad" mechanics; community features matter. Apply: design so both winner and loser understand what happened.',
    'How indie studios iterate': 'Indie teams often **iterate rapidly** with small budgets. Playtest early, cut what does not work, double down on what does. Scope small: one strong loop beats many weak ones. Tools like Unity and GameMaker speed up prototyping. Lessons: vertical slice before horizontal scope; community feedback shapes direction; constraints breed creativity. Apply: build a slice of fun before expanding.',
    'How AAA studios prototype': 'AAA studios prototype **before full production**. They build greybox levels, test mechanics in isolation, and kill ideas that do not work. Pre-production can take years. Tech and pipelines must support the vision. Lessons: validate early; "find the fun" before art; pipelines matter at scale. Apply: prototype the core loop before committing resources.',
    'Linear vs open world design': '**Linear** design controls pacing. The designer guides the player through a curated sequence. Good for narrative and tuned challenge. **Open world** offers freedom: go anywhere, tackle goals in any order. Good for exploration and player agency. Most games blend both: open zones with linear story beats. Choose based on your goals: tight story → linear; exploration → open.',
    'Flow and pacing in Mario': 'Mario games use **flow**—challenge matches skill so the player stays engaged. New ideas introduce gently, then ramp. Stars and coins give constant micro-rewards. Difficulty curves in waves: challenge, rest, challenge. Lessons: introduce one new thing at a time; rhythm matters; small wins maintain motivation. Apply: map your difficulty and reward curves.',
    'Dark Souls level interconnectivity': 'Dark Souls layers levels **vertically and horizontally**. Shortcuts loop back to earlier areas. Finding a door that opens near the start feels rewarding. The world feels like one place, not separate levels. Lessons: interconnectivity rewards exploration; shortcuts reward mastery; level design supports the fiction. Apply: ask how areas connect and what players discover.',
    'Zelda dungeon structure': 'Zelda dungeons follow a **lock-and-key** pattern. You find a tool (key, item) that unlocks new paths. Each room teaches or uses that tool. The dungeon builds to a boss that tests your new ability. Lessons: one main mechanic per space; teach then test; items open possibilities. Apply: design spaces around a central mechanic or item.',
    'Portal room-by-room teaching': 'Portal teaches **one concept per room**. Early rooms introduce portals with no pressure. Later rooms combine concepts. By the end, you solve complex puzzles using ideas you learned gradually. No text tutorials—the space teaches. Lessons: introduce, reinforce, combine; level design as tutorial; trust the player. Apply: design each space to teach or test one thing.',
    'Juiciness in game feel': '**Juiciness** is extra feedback that makes actions satisfying: screenshake, particle bursts, sound, brief pause. A punch feels weak without hit-stop and impact sound. Juice does not change logic—it changes feel. Lessons: every action needs feedback; subtle effects add up; test with sound off to see what is missing. Apply: add feedback to every player action.',
    'How Celeste handles difficulty': 'Celeste offers **assist options** without changing the main design. Invincibility, slower gameplay, infinite dash—players can tailor the experience. The base game stays challenging; assists are opt-in. Lessons: accessibility need not dilute design; options expand audience; "intended" experience coexists with assists. Apply: consider assist modes for players who want them.',
    'Responsive controls in platformers': '**Responsive** controls react immediately and predictably. Jump height often ties to hold duration. Coyote time (grace period after leaving a ledge) and jump buffering reduce frustration. Input lag kills feel. Lessons: test with a gamepad; small timing tweaks matter; consistency builds muscle memory. Apply: tune until movement feels right.',
    'Satisfying feedback loops': 'A **feedback loop** connects action to result. Kill enemy → get XP → level up → kill stronger enemy. The loop must feel rewarding and have a clear next step. Short loops (seconds) and long loops (hours) work together. Lessons: every action should feed into something; avoid dead ends; balance grind with reward. Apply: map your core loops; ensure they close.',
    'Animation and hit reaction': '**Hit reaction** sells impact. When you hit an enemy, they flinch, get pushed back, or show a damage number. Without it, attacks feel weak. Animation sells the fiction: a heavy sword swings slowly. Lessons: reaction confirms the hit; anticipation (wind-up) sells power; timing syncs with sound. Apply: every hit should have visible and audible feedback.'
  };
  const topics = [
    { base: 'How pros design', items: ['How Nintendo designs for fun', 'How FromSoftware designs difficulty', 'How Blizzard designs multiplayer', 'How indie studios iterate', 'How AAA studios prototype'] },
    { base: 'Level design approaches', items: ['Linear vs open world design', 'Flow and pacing in Mario', 'Dark Souls level interconnectivity', 'Zelda dungeon structure', 'Portal room-by-room teaching'] },
    { base: 'Mechanics and feel', items: ['Juiciness in game feel', 'How Celeste handles difficulty', 'Responsive controls in platformers', 'Satisfying feedback loops', 'Animation and hit reaction'] },
    { base: 'Narrative and story', items: ['Environmental storytelling', 'How The Last of Us tells story', 'Bioshock narrative design', 'Silent protagonist design', 'Branching choices in RPGs'] },
    { base: 'Player psychology', items: ['Variable reward systems', 'Flow state in games', 'Progression systems that hook', 'FOMO in live service games', 'Addiction and ethics'] },
    { base: 'Monetization models', items: ['How F2P games monetize', 'Battle pass design', 'Cosmetic-only vs pay-to-win', 'Subscription models', 'Ethical monetization'] },
    { base: 'Production and process', items: ['Vertical slice development', 'Playtesting methodology', 'Killing your darlings', 'Scope control', 'Post-mortems'] },
    { base: 'Accessibility', items: ['How studios add accessibility', 'Colorblind options', 'Difficulty sliders', 'One-handed control schemes', 'Subtitles and audio'] },
    { base: 'Genres and conventions', items: ['Roguelike design philosophy', 'Metroidvania structure', 'Soulslike difficulty design', 'Battle royale evolution', 'Mobile game design'] },
    { base: 'Case studies', items: ['Hollow Knight design choices', 'Hades run structure', 'Minecraft emergence', 'Stardew Valley scope', 'Undertale meta design'] }
  ];
  const FALLBACK = (item, base) => `**${item}** – This topic is part of **${base}** in game design.\n\n**What to learn:** Research how professional designers and studios approach this. Look for GDC talks, post-mortems, and design documents. Understand the principles they use, the tradeoffs they make, and what worked in shipping games.\n\n**How to apply it:** Take notes on specific examples. When designing your own game, ask: "How would a pro handle this?" Test your assumptions through prototyping and playtesting. Build your design vocabulary so you can analyze and improve your work.\n\n**Takeaway:** Game design is learned by studying others and doing. Use this topic as a starting point for deeper research and practice.`;
  const lessons = [];
  let id = 1;
  topics.forEach((t) => {
    t.items.forEach((item) => {
      lessons.push({
        id, num: id, title: item,
        content: CONTENT[item] || FALLBACK(item, t.base)
      });
      id++;
    });
  });
  return { name: 'Game Design', icon: '', desc: 'Read how others design games – no coding', lessons };
}

function generateHackerLessons() {
  const CONTENT = {
    'Bug bounty hunter methodology': '**Bug bounty hunters** find vulnerabilities and report them for reward. They scope targets, enumerate surfaces (APIs, web forms), and test systematically. Good hunters document clearly and report responsibly. Lessons: understand the rules; thoroughness beats luck; clear writeups get paid.',
    'How pen testers scope engagements': '**Pen testers** scope before starting: define boundaries, get written authorization, set rules of engagement. Scope prevents creep and legal risk. Lessons: always have permission; document scope; communicate findings professionally.',
    'Red team vs blue team mindset': '**Red team** attacks; **blue team** defends. Red thinks like an attacker; blue monitors and responds. Good security needs both. Lessons: offense finds weaknesses; defense must assume breach; both inform each other.',
    'Responsible disclosure process': '**Responsible disclosure** means giving vendors time to fix before going public. Report privately, allow 90 days or so, then disclose. Lessons: coordinate with vendors; document the timeline; consider user impact.',
    'Equifax breach lessons': 'The **Equifax breach** (2017) exposed 147 million records. Causes: unpatched vuln, poor segmentation, weak credentials. Lessons: patch critical systems; segment networks; assume compromise. Apply: prioritize patching and hardening.',
    'How companies defend networks': 'Companies use **layers**: firewalls, IDS/IPS, segmentation, endpoint protection. Defense in depth means one failure does not compromise everything. Lessons: no silver bullet; assume breach; detection matters.',
    'How OWASP Top 10 manifests': 'The **OWASP Top 10** lists common web vulns: injection, broken auth, XSS, etc. Developers should learn to avoid these patterns. Lessons: know the list; test for these; secure by default.',
    'How pros perform reconnaissance': '**Recon** gathers information before attacking. Passive: public records, DNS. Active: scanning, fingerprinting. Goal: map the target without alerting. Lessons: passive first; document everything; scope limits apply.',
    'How TLS works in practice': '**TLS** encrypts data in transit. Client and server negotiate, exchange keys, then send encrypted data. Certificates verify identity. Lessons: HTTPS everywhere; validate certs; TLS versions matter.',
    'How IR teams investigate': '**Incident response** teams: identify, contain, eradicate, recover, lessons learned. They preserve evidence and document. Lessons: have a plan; contain before eradicating; document for improvement.'
  };
  const topics = [
    { base: 'How pros approach security', items: ['Bug bounty hunter methodology', 'How pen testers scope engagements', 'Red team vs blue team mindset', 'Responsible disclosure process', 'Security researcher workflow'] },
    { base: 'Real-world breaches', items: ['Equifax breach lessons', 'SolarWinds supply chain attack', 'Colonial Pipeline ransomware', 'How phishing campaigns work', 'Social engineering case studies'] },
    { base: 'Defense strategies', items: ['How companies defend networks', 'Zero trust architecture', 'Defense in depth', 'Incident response playbooks', 'Threat hunting practices'] },
    { base: 'Web security in practice', items: ['How OWASP Top 10 manifests', 'XSS in real applications', 'SQL injection examples', 'CSRF and session attacks', 'API security patterns'] },
    { base: 'Networking and recon', items: ['How pros perform reconnaissance', 'Passive vs active scanning', 'OSINT techniques', 'Subdomain enumeration', 'Fingerprinting services'] },
    { base: 'Cryptography in the wild', items: ['How TLS works in practice', 'Certificate chain validation', 'Password hashing best practices', 'Key management in systems', 'Common crypto mistakes'] },
    { base: 'Forensics and analysis', items: ['Log analysis methodology', 'How IR teams investigate', 'Memory forensics basics', 'Evidence preservation', 'Timeline reconstruction'] },
    { base: 'Social engineering', items: ['How phishers craft messages', 'Pretexting in penetration tests', 'Vishing and smishing', 'Physical security testing', 'Defense awareness training'] },
    { base: 'Tools and automation', items: ['How pros use nmap', 'Burp Suite workflows', 'Scripting for recon', 'Automating vulnerability checks', 'Custom tool development'] },
    { base: 'Ethics and careers', items: ['Bug bounty economics', 'Getting started in security', 'Certifications and learning paths', 'Legal boundaries', 'Building a security mindset'] }
  ];
  const FALLBACK = (item, base) => `**${item}** – This topic is part of **${base}** in security and ethical hacking.\n\n**What to learn:** Research how security professionals and ethical hackers approach this. Look for documentation, conference talks (Black Hat, Def Con), and real-world case studies. Understand the techniques, defenses, and legal and ethical boundaries.\n\n**How to apply it:** Build awareness of how systems can be attacked and defended. Use this knowledge to design and configure systems more securely. Never test systems you do not own without explicit permission.\n\n**Takeaway:** Security is learned by studying how attacks work and how defenders respond. Use this topic as a starting point for focused study and practice in authorized environments.`;
  const lessons = [];
  let id = 1;
  topics.forEach((t) => {
    t.items.forEach((item) => {
      lessons.push({
        id, num: id, title: item,
        content: CONTENT[item] || FALLBACK(item, t.base)
      });
      id++;
    });
  });
  return { name: 'Hacker', icon: '', desc: 'Read how others approach security – no coding', lessons };
}

function generateClassesLessons() {
  const CONTENT = {
    'What is a ratio?': 'A **ratio** compares two quantities. The ratio of boys to girls might be 3:2. Ratios can be written as 3:2, 3/2, or "3 to 2." They stay the same when you multiply or divide both parts by the same number. For example, 6:4 simplifies to 3:2.',
    'What is a rate?': 'A **rate** is a ratio that compares two different units. Miles per hour, dollars per pound, and students per classroom are all rates. The unit rate (like 60 miles per 1 hour) helps you compare and solve problems.',
    'Equivalent ratios': '**Equivalent ratios** represent the same relationship. 2:3, 4:6, and 6:9 are equivalent. You find them by multiplying or dividing both parts by the same number. Use equivalent ratios to solve proportions.',
    'Unit rates': 'A **unit rate** compares a quantity to one unit of another. 120 miles in 2 hours = 60 miles per 1 hour. Unit rates make it easy to compare: $3 for 6 apples vs $2 for 4 apples → 50¢ vs 50¢ per apple.',
    'Solving proportions': 'A **proportion** says two ratios are equal: a/b = c/d. Cross-multiply: a×d = b×c. Use this to find missing values. If 3/4 = x/12, then 3×12 = 4x, so x = 9.',
    'Percent as a fraction': '**Percent** means "per hundred." 25% = 25/100 = 1/4. To convert: percent ÷ 100, or move the decimal left two places. 75% = 0.75.',
    'Percent of a number': 'To find a percent of a number, convert the percent to a decimal and multiply. 20% of 80 = 0.20 × 80 = 16. Or use a fraction: 20/100 × 80 = 16.',
    'Percent increase and decrease': '**Percent change** = (new − old) / old × 100. A price going from $50 to $60 is a 20% increase. A drop from $60 to $50 is about a 17% decrease.',
    'Fractions and decimals': 'Every **fraction** can be written as a decimal: divide the numerator by the denominator. 3/4 = 0.75. Terminating decimals (0.25) and repeating decimals (1/3 = 0.333…) both represent rational numbers.',
    'Adding and subtracting fractions': 'To add or subtract fractions, use a **common denominator**. 1/4 + 1/3 = 3/12 + 4/12 = 7/12. Find the LCM of the denominators, rewrite each fraction, then add or subtract numerators.',
    'Multiplying fractions': 'To **multiply fractions**, multiply numerators and multiply denominators. 2/3 × 4/5 = 8/15. Simplify before or after. "Of" often means multiply: 1/2 of 24 = 1/2 × 24 = 12.',
    'Dividing fractions': 'To **divide fractions**, flip the second fraction and multiply. 2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6. "How many 1/4 cups in 2 cups?" → 2 ÷ 1/4 = 8.',
    'Operations with decimals': 'Line up **decimal points** when adding or subtracting. When multiplying, count total decimal places in the factors; the product has that many. For division, move the decimal in the divisor to make it whole.',
    'Order of operations': '**PEMDAS**: Parentheses, Exponents, Multiplication & Division (left to right), Addition & Subtraction (left to right). In 2 + 3 × 4, multiply first: 2 + 12 = 14.',
    'GCF and LCM': 'The **GCF** (Greatest Common Factor) is the largest number that divides both. For 12 and 18, GCF = 6. The **LCM** (Least Common Multiple) is the smallest both divide into. For 4 and 6, LCM = 12. Use prime factorization.',
    'Integers and the number line': '**Integers** are …, −3, −2, −1, 0, 1, 2, 3, … On a number line, negative is left of zero. −5 is less than −2 because it\'s farther left. Absolute value |−5| = 5 is the distance from zero.',
    'Adding and subtracting integers': 'Same sign: add the absolute values, keep the sign. −3 + (−5) = −8. Different signs: subtract the smaller absolute value from the larger, take the sign of the larger. −5 + 3 = −2. Subtraction is adding the opposite.',
    'Multiplying and dividing integers': 'Same sign → positive product. −4 × −3 = 12. Different signs → negative product. −4 × 3 = −12. Same rules for division.',
    'Rational numbers': '**Rational numbers** include integers, fractions, and decimals that end or repeat. They can be written as a/b where a and b are integers and b ≠ 0. −3, 1/2, 0.75 are all rational.',
    'Absolute value': '**Absolute value** is distance from zero. |−7| = 7, |5| = 5. On a number line, |a − b| is the distance between a and b. Absolute value is never negative.',
    'Algebraic expressions': 'An **expression** has numbers, variables, and operations: 3x + 5. A **variable** (like x) represents an unknown. **Terms** are added: 3x and 5. **Coefficients** are the numbers multiplying variables: 3 is the coefficient of x.',
    'Combining like terms': '**Like terms** have the same variable part. 3x and 5x are like terms; 3x and 5 are not. Combine: 3x + 5x = 8x. 2a + 3b − a + 4 = a + 3b + 4.',
    'Distributive property': 'The **distributive property**: a(b + c) = ab + ac. 3(x + 4) = 3x + 12. Use it to expand or to factor. It works with subtraction: 2(x − 5) = 2x − 10.',
    'Solving one-step equations': 'To solve an equation, do the same operation to both sides. x + 5 = 12 → subtract 5 → x = 7. 3x = 15 → divide by 3 → x = 5. The goal is x = something.',
    'Solving two-step equations': 'Work backward from the order of operations. 2x + 3 = 11: first subtract 3 (2x = 8), then divide by 2 (x = 4). Undo addition before multiplication.',
    'Inequalities': '**Inequalities** use <, >, ≤, ≥. Solve like equations, but when you multiply or divide by a negative, flip the symbol. −2x > 6 → x < −3.',
    'Area of rectangles and parallelograms': '**Area** = base × height. For a rectangle, that\'s length × width. A parallelogram has the same formula: the height is perpendicular to the base.',
    'Area of triangles': '**Area of a triangle** = (1/2) × base × height. The height is the perpendicular distance from the base to the opposite vertex. A triangle is half of a parallelogram.',
    'Area of trapezoids': '**Area of a trapezoid** = (1/2) × (base1 + base2) × height. Add the two parallel bases, multiply by height, then halve.',
    'Area of circles': '**Area of a circle** = πr². Use 3.14 or a calculator for π. If the radius is 5 cm, area = π × 25 ≈ 78.5 cm².',
    'Circumference': '**Circumference** is the perimeter of a circle: C = 2πr or C = πd. For radius 4, C = 2π(4) = 8π ≈ 25.1.',
    'Surface area of prisms': '**Surface area** is the total area of all faces. For a rectangular prism: 2(lw + lh + wh). Find the area of each face and add them up.',
    'Surface area of cylinders': 'A **cylinder** has two circular bases and a curved side. SA = 2πr² + 2πrh. The lateral area is 2πrh.',
    'Volume of prisms': '**Volume** = base area × height. For a rectangular prism: V = lwh. For any prism, find the area of the base and multiply by the height.',
    'Volume of cylinders': '**Volume of a cylinder** = πr²h. Same idea as a prism: area of the circular base times height.',
    'Volume of cones and spheres': '**Cone**: V = (1/3)πr²h. **Sphere**: V = (4/3)πr³. A cone is one-third of a cylinder with the same base and height.',
    'Mean, median, mode': '**Mean** = sum ÷ count. **Median** = middle value when ordered. **Mode** = most frequent. Each describes center differently; outliers affect the mean more.',
    'Range and spread': '**Range** = max − min. It measures spread. For 2, 5, 7, 9, 12, range = 10. Other measures of spread include IQR (interquartile range).',
    'Data displays': '**Histograms** show distribution in intervals. **Box plots** show median, quartiles, and outliers. **Dot plots** show each value. Choose the display that best represents your data.',
    'Probability basics': '**Probability** = favorable outcomes / total outcomes. P(rolling 6) = 1/6. Probability ranges from 0 (impossible) to 1 (certain).',
    'Coordinate plane': 'The **coordinate plane** has an x-axis (horizontal) and y-axis (vertical). A point (x, y) gives position. The origin is (0, 0). Quadrant I is top-right; quadrants go counterclockwise.',
    'Graphing linear equations': 'A **linear equation** in two variables graphs as a straight line. Find two points (often intercepts), plot them, draw the line. y = 2x + 1 has slope 2 and y-intercept 1.',
    'Slope': '**Slope** = rise/run = (y2 − y1)/(x2 − x1). Positive slope goes up left-to-right; negative goes down. Horizontal lines have slope 0; vertical lines have undefined slope.',
    'Slope-intercept form': '**y = mx + b**: m is slope, b is y-intercept. To graph, plot (0, b) then use slope to find another point. To find slope from an equation, solve for y.',
    'Proportional relationships': 'When two quantities are **proportional**, their ratio is constant. y = kx. The graph passes through (0, 0) and is a straight line. The slope equals the constant of proportionality.',
    'Functions': 'A **function** assigns exactly one output to each input. The rule can be a table, graph, or equation. For y = 2x, input 3 gives output 6. Functions model many real relationships.',
    'Real numbers': '**Real numbers** include rational (fractions, terminating/repeating decimals) and **irrational** (non-repeating decimals like π and √2). Every point on the number line is a real number.',
    'Irrational numbers': '**Irrational numbers** cannot be written as fractions. √2, π, and e are irrational. Their decimals never repeat. √4 = 2 is rational; √2 ≈ 1.414… is irrational.',
    'Square roots': '**√a** is the non-negative number whose square is a. √9 = 3. √2 is irrational. Perfect squares: 1, 4, 9, 16, 25, … For non-perfect squares, use a calculator or estimate.',
    'Exponents': '**Exponent** tells how many times the base is used as a factor. 2³ = 2×2×2 = 8. Rules: aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ.',
    'Scientific notation': '**Scientific notation** writes numbers as a × 10ⁿ where 1 ≤ a < 10. 3,000,000 = 3×10⁶. 0.00004 = 4×10⁻⁵. Useful for very large or small numbers.',
    'Systems of equations': 'A **system** has two (or more) equations. A solution satisfies both. Solve by graphing (where lines cross), substitution, or elimination. Two lines can intersect (one solution), be parallel (none), or coincide (infinitely many).',
    'Pythagorean theorem': 'In a right triangle, **a² + b² = c²** where c is the hypotenuse. If legs are 3 and 4, c² = 9 + 16 = 25, so c = 5. Use it to find missing sides or check if a triangle is right.',
    'Transformations': '**Transformations** move figures: translation (slide), reflection (flip), rotation (turn), dilation (scale). A dilation multiplies distances from a center point.',
    'Congruence and similarity': '**Congruent** figures have the same size and shape. **Similar** figures have the same shape but may differ in size. Corresponding angles are equal; similar triangles have proportional sides.',
    'Exponential growth': 'In **exponential growth**, a quantity multiplies by a constant factor over time. y = a·bˣ. Population growth and compound interest are examples. The graph curves up sharply.',
    'Introduction to quadratics': 'A **quadratic** has form ax² + bx + c. Its graph is a parabola. The vertex is the highest or lowest point. Quadratics model projectile motion and area problems.'
  };
  const TOPICS = [
    { grade: 6, base: 'Ratios and proportional thinking', items: ['What is a ratio?', 'What is a rate?', 'Equivalent ratios', 'Unit rates', 'Solving proportions', 'Ratio word problems', 'Rates in real life', 'Comparing ratios', 'Ratio tables', 'Scale and ratio'] },
    { grade: 6, base: 'Number operations', items: ['Fractions and decimals', 'Adding and subtracting fractions', 'Multiplying fractions', 'Dividing fractions', 'Operations with decimals', 'Order of operations', 'GCF and LCM', 'Prime factorization', 'Divisibility rules', 'Estimating with decimals'] },
    { grade: 6, base: 'Percent', items: ['Percent as a fraction', 'Percent of a number', 'Percent increase and decrease', 'Percents and decimals', 'Percent word problems', 'Sales tax and tip', 'Discounts', 'Simple interest intro', 'Percent error', 'Percent and ratio connections'] },
    { grade: 6, base: 'Integers and rationals', items: ['Integers and the number line', 'Adding and subtracting integers', 'Multiplying and dividing integers', 'Rational numbers', 'Absolute value', 'Comparing rationals', 'Rationals on a number line', 'Opposites and reciprocals', 'Integer word problems', 'Coordinate plane intro'] },
    { grade: 6, base: 'Algebraic expressions', items: ['Algebraic expressions', 'Combining like terms', 'Distributive property', 'Evaluating expressions', 'Writing expressions', 'Exponents in expressions', 'Equivalent expressions', 'Substitution', 'Expression word problems', 'Properties of operations'] },
    { grade: 6, base: 'Equations and inequalities', items: ['Solving one-step equations', 'Solving two-step equations', 'Inequalities', 'Equation word problems', 'Writing equations', 'Checking solutions', 'Multi-step equations', 'Inequalities on number lines', 'Using variables', 'Balance and equality'] },
    { grade: 6, base: 'Area and polygons', items: ['Area of rectangles and parallelograms', 'Area of triangles', 'Area of trapezoids', 'Area of composite shapes', 'Perimeter and area', 'Units of area', 'Decomposing shapes', 'Area formulas', 'Real-world area', 'Irregular polygons'] },
    { grade: 6, base: 'Surface area and volume', items: ['Surface area of prisms', 'Surface area of cylinders', 'Volume of prisms', 'Volume of cylinders', 'Nets of solids', 'Units of volume', 'Real-world volume', 'Cross sections', '3D visualization', 'Capacity and volume'] },
    { grade: 6, base: 'Data and statistics', items: ['Mean, median, mode', 'Range and spread', 'Data displays', 'Interpreting graphs', 'Dot plots', 'Histograms', 'Box plots', 'Data collection', 'Statistical questions', 'Summarizing data'] },
    { grade: 6, base: 'Coordinate plane', items: ['Coordinate plane', 'Plotting points', 'Reflections on the plane', 'Distance in the plane', 'Quadrants', 'Reading coordinates', 'Graphing patterns', 'Transformations intro', 'Real-world coordinates', 'Maps and grids'] },
    { grade: 6, base: 'Numerical expressions', items: ['Writing numerical expressions', 'Evaluating expressions', 'Exponents and order of operations', 'Grouping symbols', 'Word problems to expressions', 'Multi-step evaluation', 'Properties in expressions', 'Expression vs equation', 'Checking your work', 'Mental math strategies'] },
    { grade: 6, base: 'Factors and multiples', items: ['Factors and factor pairs', 'Multiples', 'Prime and composite numbers', 'Prime factorization', 'GCF with factor trees', 'LCM with factor trees', 'GCF and LCM applications', 'Divisibility', 'Common factors', 'Problem solving with GCF and LCM'] },
    { grade: 6, base: 'Integers expanded', items: ['Positive and negative in context', 'Opposites', 'Absolute value applications', 'Comparing integers', 'Integer operations review', 'Word problems with integers', 'Temperature and elevation', 'Money and debits', 'Sports and statistics', 'Integer patterns'] },
    { grade: 6, base: 'Ratios expanded', items: ['Part-to-part and part-to-whole', 'Ratio as division', 'Equivalent ratio tables', 'Ratio and proportion', 'Rate problems', 'Unit rate comparison', 'Converting units', 'Ratio in recipes', 'Scale drawings intro', 'Ratio and percent'] },
    { grade: 7, base: 'Rational number operations', items: ['Adding rational numbers', 'Subtracting rational numbers', 'Multiplying rational numbers', 'Dividing rational numbers', 'Rational number properties', 'Mixed numbers', 'Decimals and fractions together', 'Order of operations with rationals', 'Rational word problems', 'Estimation with rationals'] },
    { grade: 7, base: 'Proportional relationships', items: ['Proportional relationships', 'Constant of proportionality', 'Graphing proportions', 'Proportion word problems', 'Similar figures', 'Scale drawings', 'Scale factor', 'Maps and scale', 'Unit rate in context', 'Comparing proportional situations'] },
    { grade: 7, base: 'Percent applications', items: ['Percent of change', 'Percent error', 'Markup and discount', 'Commission', 'Simple interest', 'Tax and tip', 'Percent increase/decrease', 'Multi-step percent', 'Percent in science', 'Percent and probability'] },
    { grade: 7, base: 'Circles and angles', items: ['Area of circles', 'Circumference', 'Pi and circles', 'Arc length intro', 'Angle relationships', 'Complementary and supplementary', 'Vertical angles', 'Angles in triangles', 'Parallel lines and angles', 'Angle word problems'] },
    { grade: 7, base: 'Geometry and measurement', items: ['Surface area of prisms', 'Surface area of cylinders', 'Volume of prisms', 'Volume of cylinders', 'Scale drawings and area', 'Cross sections', 'Circumference and area together', 'Compound shapes', 'Real-world geometry', 'Measurement accuracy'] },
    { grade: 7, base: 'Probability', items: ['Probability basics', 'Theoretical vs experimental', 'Compound events', 'Sample space', 'Tree diagrams', 'Independent events', 'Probability of complements', 'Making predictions', 'Probability and statistics', 'Fair games'] },
    { grade: 7, base: 'Statistics and sampling', items: ['Comparing distributions', 'Random sampling', 'Bias in sampling', 'Making inferences', 'Population vs sample', 'Measures of center', 'Measures of spread', 'Data and decisions', 'Statistical variability', 'Comparing data sets'] },
    { grade: 7, base: 'Expressions and equations', items: ['Equivalent expressions', 'Linear equations', 'Two-step equations', 'Multi-step equations', 'Equations with rationals', 'Equation word problems', 'Inequalities', 'Writing and solving', 'Checking solutions', 'Real-world equations'] },
    { grade: 7, base: 'Review and connections', items: ['Connecting concepts', 'Problem solving strategies', 'Mathematical modeling', 'Real-world applications', 'Review of ratios', 'Review of operations', 'Review of geometry', 'Test prep strategies', 'Error analysis', 'Growth mindset in math'] },
    { grade: 7, base: 'Adding and subtracting rationals', items: ['Adding fractions with different denominators', 'Subtracting fractions', 'Adding mixed numbers', 'Subtracting mixed numbers', 'Adding decimals', 'Subtracting decimals', 'Adding positive and negative', 'Estimating sums and differences', 'Word problems with addition', 'Checking subtraction with addition'] },
    { grade: 7, base: 'Multiplying and dividing rationals', items: ['Multiplying fractions', 'Multiplying mixed numbers', 'Dividing fractions', 'Dividing mixed numbers', 'Multiplying decimals', 'Dividing decimals', 'Sign rules for rationals', 'Reciprocals', 'Order of operations with rationals', 'Rational number properties'] },
    { grade: 7, base: 'Equations and inequalities', items: ['One-step equations with rationals', 'Two-step equations', 'Multi-step equations', 'Equations with variables on both sides', 'Inequality symbols', 'Solving inequalities', 'Graphing solutions', 'Equation and inequality word problems', 'Writing equations from context', 'Special cases'] },
    { grade: 7, base: 'Scale and similarity', items: ['Scale drawings', 'Scale factor', 'Similar figures', 'Corresponding parts', 'Solving for missing sides', 'Map scales', 'Blueprint scales', 'Scale and area', 'Scale and volume', 'Real-world scale problems'] },
    { grade: 7, base: 'Angles and lines', items: ['Angle types', 'Complementary angles', 'Supplementary angles', 'Vertical angles', 'Angles in parallel lines', 'Angles in triangles', 'Angle sum of triangles', 'Exterior angles', 'Finding missing angles', 'Angle proofs intro'] },
    { grade: 7, base: 'Statistical thinking', items: ['Population and sample', 'Random sampling', 'Bias in data', 'Comparing two populations', 'Overlapping data sets', 'Mean absolute deviation', 'Box plots and quartiles', 'Interpreting statistics', 'Making inferences', 'Statistics in media'] },
    { grade: 8, base: 'Real numbers', items: ['Real numbers', 'Irrational numbers', 'Square roots', 'Approximating irrationals', 'Rational vs irrational', 'Number line with irrationals', 'Estimating square roots', 'Simplifying radicals intro', 'Real numbers in context', 'Properties of real numbers'] },
    { grade: 8, base: 'Exponents and scientific notation', items: ['Exponents', 'Scientific notation', 'Operations with scientific notation', 'Powers of 10', 'Zero and negative exponents', 'Exponent rules', 'Exponential expressions', 'Scientific notation in science', 'Comparing very large numbers', 'Applications of exponents'] },
    { grade: 8, base: 'Linear equations and functions', items: ['Linear equations in one variable', 'Slope', 'Slope-intercept form', 'Graphing linear equations', 'Proportional relationships', 'Functions', 'Function notation', 'Linear vs nonlinear', 'Comparing linear functions', 'Rate of change'] },
    { grade: 8, base: 'Systems of equations', items: ['Systems of equations', 'Graphing systems', 'Substitution method', 'Elimination method', 'Systems word problems', 'Consistent and inconsistent', 'Number of solutions', 'Applications of systems', 'Choosing a method', 'Systems with fractions'] },
    { grade: 8, base: 'Transformations and congruence', items: ['Transformations', 'Congruence and similarity', 'Translations', 'Reflections', 'Rotations', 'Dilations', 'Sequence of transformations', 'Congruence criteria', 'Similar triangles', 'Transformations in the plane'] },
    { grade: 8, base: 'Pythagorean theorem', items: ['Pythagorean theorem', 'Applications of Pythagorean theorem', 'Pythagorean theorem in 3D', 'Distance formula', 'Converse of Pythagorean theorem', 'Finding legs and hypotenuse', 'Right triangle word problems', 'Irrational lengths', 'Proof of Pythagorean theorem', 'Pythagorean triples'] },
    { grade: 8, base: 'Volume and geometry', items: ['Volume of cones and spheres', 'Volume of cylinders review', 'Cavalieri\'s principle', 'Volume formulas', 'Surface area of spheres', 'Scale and volume', 'Density', 'Real-world volume', 'Compound 3D shapes', 'Volume and capacity'] },
    { grade: 8, base: 'Exponential and quadratic intro', items: ['Exponential growth', 'Introduction to quadratics', 'Exponential decay', 'Linear vs exponential', 'Graphing exponentials', 'Quadratic graphs', 'Tables and patterns', 'Exponential in science', 'Quadratic word problems', 'Connecting to high school'] },
    { grade: 8, base: 'Linear equations and slope', items: ['Slope from a graph', 'Slope from two points', 'Slope from an equation', 'Slope-intercept form', 'Point-slope form', 'Standard form', 'Converting between forms', 'Parallel lines and slope', 'Perpendicular lines and slope', 'Slope in context'] },
    { grade: 8, base: 'Graphing and functions', items: ['Graphing linear equations', 'x and y intercepts', 'Function tables', 'Function graphs', 'Domain and range', 'Linear function behavior', 'Comparing functions', 'Function notation', 'Input-output', 'Real-world functions'] },
    { grade: 8, base: 'Solving systems', items: ['Graphing to solve', 'Substitution intro', 'Substitution practice', 'Elimination by addition', 'Elimination by subtraction', 'Choosing a method', 'Systems with no solution', 'Systems with infinite solutions', 'Systems word problems', 'Applications of systems'] },
    { grade: 8, base: 'Exponents and radicals', items: ['Product of powers', 'Quotient of powers', 'Power of a power', 'Zero exponent', 'Negative exponents', 'Square roots', 'Simplifying radicals', 'Rational exponents intro', 'Exponent word problems', 'Exponential notation'] },
    { grade: 8, base: 'Scientific notation operations', items: ['Multiplying in scientific notation', 'Dividing in scientific notation', 'Adding and subtracting', 'Comparing magnitudes', 'Scientific notation in science', 'Very large numbers', 'Very small numbers', 'Unit conversion', 'Accuracy and precision', 'Real-world scientific notation'] },
    { grade: 6, base: 'Fraction and decimal fluency', items: ['Adding and subtracting fractions', 'Multiplying and dividing fractions', 'Mixed numbers', 'Decimal operations', 'Fractions and decimals', 'Estimation', 'Word problems', 'Measurement with fractions', 'Review of operations', 'Mixed practice'] },
    { grade: 7, base: 'Proportional reasoning', items: ['Identifying proportionality', 'Constant of proportionality', 'Proportional equations', 'Solving proportions', 'Proportional graphs', 'Unit rate as slope', 'Scale and proportion', 'Percent as proportion', 'Similar figures and proportion', 'Proportion applications'] },
    { grade: 8, base: 'Linear and algebraic thinking', items: ['Simplifying expressions', 'Solving multi-step equations', 'Equations with variables on both sides', 'Literal equations', 'Inequalities', 'Linear from tables and graphs', 'Rate of change', 'Linear modeling', 'Algebraic reasoning', 'Connecting to functions'] },
    { grade: 6, base: 'Percent and ratio connections', items: ['Percent as a ratio', 'Finding percent', 'Percent problems', 'Ratio to percent', 'Percent increase and decrease', 'Applications of percent', 'Multi-step percent', 'Percent and fractions', 'Percent in real life', 'Integrated percent practice'] },
    { grade: 6, base: 'Introduction to algebra', items: ['Variables and expressions', 'Writing expressions', 'Evaluating expressions', 'Order of operations', 'Properties of operations', 'One-step equations', 'Equation word problems', 'Checking solutions', 'From words to equations', 'Algebraic thinking'] },
    { grade: 7, base: 'Geometry applications', items: ['Area formulas', 'Circumference and area of circles', 'Surface area', 'Volume', 'Scale and measurement', 'Composite figures', 'Cross sections', 'Real-world geometry', 'Measurement precision', 'Geometry problem solving'] },
    { grade: 7, base: 'Data and probability', items: ['Measures of center', 'Measures of spread', 'Data displays', 'Random sampling', 'Probability', 'Compound probability', 'Making inferences', 'Comparing populations', 'Statistical questions', 'Data-driven decisions'] },
    { grade: 8, base: 'Number sense and exponents', items: ['Real number system', 'Irrational numbers', 'Square roots', 'Exponent rules', 'Scientific notation', 'Operations with exponents', 'Radicals', 'Approximating irrationals', 'Number line with reals', 'Exponent applications'] }
  ];
  const lessons = [];
  let id = 1;
  const used = new Set();
  TOPICS.forEach((t) => {
    t.items.forEach((item) => {
      const FALLBACK = `**${item}** – This topic is part of **${t.base}** in Grade ${t.grade} math (Redwood Day / Big Ideas scope).\n\n**What you will learn:** Build conceptual understanding—why this idea works, not just the steps. Then practice procedural fluency: work through examples until the steps feel natural. Finally, apply the concept to real-world problems.\n\n**How to practice:** Use a textbook or worksheet. Do 5–10 problems. Check your work. If stuck, review the examples and try a simpler problem first.\n\n**Takeaway:** Mastery comes from understanding, practice, and application. Do not rush—solid foundations matter.`;
      const content = CONTENT[item] || FALLBACK;
      lessons.push({ id, num: id, title: item, content });
      id++;
    });
  });
  return { name: 'Classes', icon: '', desc: '6th–8th grade math (Redwood Day scope) – 500 lessons', lessons };
}

function generateStockMarketLessons() {
  const CONTENT = {
    'What is the stock market?': 'The **stock market** is where buyers and sellers trade shares of publicly traded companies. It includes exchanges like the NYSE and NASDAQ. Prices move based on supply and demand. The market helps companies raise capital and lets investors share in company growth.',
    'What is a stock?': 'A **stock** (or share) is a small piece of ownership in a company. When you buy stock, you become a partial owner. If the company does well, the stock price may rise. If it does poorly, the price may fall. Stocks can be bought and sold on exchanges.',
    'Shares and ownership': '**Shares** are the units of stock you buy. Owning 100 shares of a company means you own a tiny fraction of it. More shares = more ownership. Shareholders may vote on company decisions and can benefit from price gains and dividends.',
    'Stock exchanges': '**Stock exchanges** are platforms where stocks are traded. The **NYSE** (New York Stock Exchange) and **NASDAQ** are the main US exchanges. Exchanges ensure fair, transparent trading and require companies to meet listing standards.',
    'NYSE and NASDAQ': 'The **NYSE** is the world\'s largest stock exchange by market cap; it has a physical trading floor. **NASDAQ** is fully electronic and lists many tech companies. Both are in New York and trade during regular market hours.',
    'Why companies go public': 'Companies **go public** (IPO) to raise money by selling shares. The capital funds growth, R&D, or debt repayment. Going public also creates liquidity for early investors and employees and raises the company\'s profile.',
    'Buying your first stock': 'To buy stock: open a brokerage account, fund it, find a stock by ticker symbol, choose an order type (market or limit), and place the order. Start small and only invest money you can afford to leave invested.',
    'Selling stocks': 'You sell when you place a sell order through your broker. You can sell at the current market price (market order) or set a minimum price (limit order). Capital gains or losses are realized when you sell.',
    'Bid and ask prices': 'The **bid** is the highest price buyers will pay. The **ask** is the lowest price sellers will accept. The gap between them is the **spread**. You typically buy at the ask and sell at the bid.',
    'Market makers': '**Market makers** are firms that quote both bid and ask prices and help ensure liquidity. They profit from the spread. Their role is to make it easier to buy and sell shares even when there aren\'t many other traders.',
    'Bull market': 'A **bull market** is a sustained period of rising prices, usually 20% or more from a low. Investors are optimistic. Bull markets can last years but eventually correct or reverse.',
    'Bear market': 'A **bear market** is a sustained drop of 20% or more from a high. Investors are pessimistic. Bear markets can be painful but often create buying opportunities for long-term investors.',
    'Market cap': '**Market cap** = share price × total shares. It shows a company\'s total value. Large-cap (big), mid-cap (medium), and small-cap (small) describe company size. Larger caps are often less volatile.',
    'Volume': '**Volume** is the number of shares traded in a period. High volume often means more interest and easier execution. Low volume can mean wider spreads and harder trades.',
    'Liquidity': '**Liquidity** means how easily you can buy or sell without moving the price. Stocks with high volume are more liquid. Illiquid stocks can be hard to exit at a fair price.',
    'Volatility': '**Volatility** measures how much a price swings. High volatility = bigger ups and downs. It\'s often measured by standard deviation or the VIX index. More volatility usually means more risk.',
    'Corrections': 'A **correction** is a drop of about 10–20% from a recent high. They\'re normal and often healthy. Many investors use corrections to buy at lower prices.',
    'Crashes': 'A **crash** is a sudden, steep drop (often 20%+ in days). Crashes are rare but can be severe. History shows markets have recovered over time, though past performance doesn\'t guarantee future results.',
    'Rally': 'A **rally** is a period of rising prices. It can be short (days) or long (months). Rallies often follow selloffs as sentiment improves.',
    'Ticker symbols': 'A **ticker symbol** is a short code for a stock (e.g., AAPL for Apple, MSFT for Microsoft). Use it to look up and trade a stock. Some symbols include letters indicating share class or exchange.',
    'S&P 500': 'The **S&P 500** tracks 500 large US companies. It\'s a key benchmark for US stocks. Many index funds follow it. It\'s market-cap weighted, so bigger companies affect it more.',
    'Dow Jones': 'The **Dow Jones Industrial Average** (or Dow) tracks 30 large US companies. It\'s price-weighted, so higher-priced stocks have more impact. Often quoted in the news.',
    'NASDAQ Composite': 'The **NASDAQ Composite** includes thousands of stocks listed on NASDAQ, with a focus on tech. It\'s a broad index of NASDAQ-listed companies.',
    'Index funds': 'An **index fund** holds a basket of stocks that mirrors an index (like the S&P 500). Low fees, broad diversification, and they match market performance. Popular for long-term investors.',
    'Market orders': 'A **market order** buys or sells at the best available price right away. Fast and simple, but the price can slip in volatile markets. Good when speed matters.',
    'Limit orders': 'A **limit order** sets a maximum buy price or minimum sell price. It only fills at your price or better. Gives control but may not execute if the price never reaches your level.',
    'Stop-loss orders': 'A **stop-loss** triggers a sell when the price falls to a set level. It limits downside but can sell in a sudden dip. Use to protect gains or cap losses.',
    'P/E ratio': '**P/E** (price-to-earnings) = stock price ÷ earnings per share. It shows how much you pay per dollar of profit. Lower P/E can mean cheaper; higher can mean expected growth.',
    'Earnings per share': '**EPS** = net income ÷ shares outstanding. It\'s profit per share. Higher EPS with steady or rising trends often attracts investors. Compare EPS across similar companies.',
    'What are dividends?': '**Dividends** are cash payments from a company to shareholders, often quarterly. They come from profits. Dividend stocks provide income; growth stocks often reinvest profits instead.',
    'What is an ETF?': 'An **ETF** (exchange-traded fund) is a fund that trades like a stock. It holds assets (stocks, bonds, etc.) and tracks an index or theme. Trade anytime during market hours, often with low fees.',
    'Diversification': '**Diversification** means spreading investments across many stocks, sectors, or assets. It reduces risk: if one holding drops, others may offset it. Don\'t put all your money in one place.',
    'Dollar-cost averaging': '**DCA** means investing a fixed amount on a schedule (e.g., monthly). You buy more shares when prices are low and fewer when high. Reduces the impact of market timing.'
  };
  const topics = [
    { base: 'Basics', items: ['What is the stock market?', 'What is a stock?', 'Shares and ownership', 'Stock exchanges', 'NYSE and NASDAQ', 'Why companies go public', 'Buying your first stock', 'Selling stocks', 'Bid and ask prices', 'Market makers'] },
    { base: 'Market terms', items: ['Bull market', 'Bear market', 'Market cap', 'Volume', 'Liquidity', 'Volatility', 'Corrections', 'Crashes', 'Rally', 'Ticker symbols'] },
    { base: 'Indexes', items: ['S&P 500', 'Dow Jones', 'NASDAQ Composite', 'Index funds', 'Tracking the market', 'Russell 2000', 'International indexes', 'Sector indexes', 'Index investing', 'Benchmarks'] },
    { base: 'Order types', items: ['Market orders', 'Limit orders', 'Stop-loss orders', 'Stop-limit orders', 'Buy and sell basics', 'Order execution', 'Day orders vs GTC', 'Fractional shares', 'Dollar-cost averaging', 'Batch orders'] },
    { base: 'Fundamentals', items: ['P/E ratio', 'Earnings per share', 'Revenue vs profit', 'Balance sheet basics', 'Cash flow', 'Dividend yield', 'Book value', 'Debt ratios', 'Growth vs value', 'Financial statements'] },
    { base: 'Dividends', items: ['What are dividends?', 'Dividend payment dates', 'Dividend yield', 'Dividend aristocrats', 'Reinvesting dividends', 'Dividend stocks vs growth', 'Qualified dividends', 'Payout ratio', 'Ex-dividend date', 'Dividend ETFs'] },
    { base: 'ETFs and funds', items: ['What is an ETF?', 'ETF vs mutual fund', 'ETFs vs stocks', 'Expense ratios', 'Passive investing', 'Sector ETFs', 'Bond ETFs', 'International ETFs', 'Commodity ETFs', 'Choosing an ETF'] },
    { base: 'Brokerage', items: ['Opening a brokerage account', 'Brokerage fees', 'Commission-free trading', 'IRA and 401(k)', 'Taxable accounts', 'Margin accounts', 'Cash accounts', 'Transferring accounts', 'Broker research tools', 'Customer protection'] },
    { base: 'Analysis', items: ['Fundamental analysis', 'Technical analysis', 'Reading charts', 'Support and resistance', 'Moving averages', 'News and earnings', 'Analyst ratings', 'Sector rotation', 'Macro trends', 'Company research'] },
    { base: 'Strategy', items: ['Long-term investing', 'Value investing', 'Growth investing', 'Dollar-cost averaging', 'Diversification', 'Asset allocation', 'Rebalancing', 'Risk tolerance', 'Time horizon', 'Setting goals'] }
  ];
  const lessons = [];
  let id = 1;
  topics.forEach((t) => {
    t.items.forEach((item) => {
      const FALLBACK = `**${item}** – This topic is part of **${t.base}** in stock market and investing.\n\n**What to learn:** Start with the definition—what is it, and how do investors use it? Then look at examples: how does it appear in real portfolios, news, or company reports? Finally, consider how it affects decisions: when to buy, sell, or hold.\n\n**How to study it:** Use a finance textbook, investopedia.com, or your broker\'s education resources. Take notes and work through a few example problems or scenarios.\n\n**Takeaway:** Build your investing vocabulary and understanding step by step. Each concept connects to others; over time you will see how they fit together.`;
      const content = CONTENT[item] || FALLBACK;
      lessons.push({ id, num: id, title: item, content });
      id++;
    });
  });
  return {
    name: 'Stock Market',
    icon: '',
    desc: 'Learn investing and the stock market – 100 lessons',
    lessons
  };
}

if (typeof window !== 'undefined') {
  window.INFO_PATHS = INFO_PATHS;
}

// Real code examples – actual syntax to write, not descriptions
const REAL_CODE = {
  html: {
    'DOCTYPE': ['<!DOCTYPE html>', '<!DOCTYPE html>\n<html lang="en">', '<!DOCTYPE html>\n<html>\n  <head></head>\n  <body></body>\n</html>'],
    'html tag': ['<html></html>', '<html lang="en">\n\n</html>', '<html>\n  <head></head>\n  <body></body>\n</html>'],
    'head': ['<head></head>', '<head>\n  <meta charset="UTF-8">\n  <title>My Page</title>\n</head>', '<head>\n  <link rel="stylesheet" href="style.css">\n</head>'],
    'body': ['<body></body>', '<body>\n  <h1>Hello</h1>\n</body>', '<body>\n  <p>Content goes here.</p>\n</body>'],
    'meta tags': ['<meta charset="UTF-8">', '<meta name="viewport" content="width=device-width">', '<meta name="description" content="Page description">'],
    'title': ['<title>Page Title</title>', '<title>My Website</title>', '<title>Home - My Site</title>'],
    'charset': ['<meta charset="UTF-8">', '<meta charset="utf-8">', '<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width">'],
    'viewport': ['<meta name="viewport" content="width=device-width, initial-scale=1.0">', '<meta name="viewport" content="width=device-width">', '<meta name="viewport" content="width=1200">'],
    'lang attribute': ['<html lang="en">', '<html lang="es">', '<p lang="fr">Bonjour</p>'],
    'document outline': ['<article>\n  <h1>Title</h1>\n  <section><h2>Section</h2></section>\n</article>', '<main>\n  <h1>Main</h1>\n</main>', ''],
    'headings': ['<h1>Heading 1</h1>', '<h2>Heading 2</h2>', '<h1>Title</h1>\n<h2>Subtitle</h2>'],
    'paragraphs': ['<p>This is a paragraph.</p>', '<p>First paragraph.</p>\n<p>Second paragraph.</p>', '<p>Text content here.</p>'],
    'bold and italic': ['<strong>bold</strong>', '<em>italic</em>', '<p><strong>Bold</strong> and <em>italic</em> text.</p>'],
    'lists': ['<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>', '<ol>\n  <li>First</li>\n  <li>Second</li>\n</ol>', '<ul><li>One</li><li>Two</li></ul>'],
    'definition lists': ['<dl>\n  <dt>Term</dt>\n  <dd>Definition</dd>\n</dl>', '<dl><dt>HTML</dt><dd>HyperText Markup Language</dd></dl>', ''],
    'blockquote': ['<blockquote>Quoted text.</blockquote>', '<blockquote cite="url">Quote</blockquote>', '<blockquote><p>Quote here</p></blockquote>'],
    'pre and code': ['<code>code</code>', '<pre><code>console.log("hello");</code></pre>', '<p>Use <code>let</code> for variables.</p>'],
    'line breaks': ['<br>', '<p>Line one<br>Line two</p>', '<br>\n<br>'],
    'horizontal rule': ['<hr>', '<hr>\n<p>Section below</p>', '<hr>\n'],
    'semantic text': ['<mark>highlighted</mark>', '<small>small text</small>', '<p><mark>Important</mark> text.</p>'],
    'anchor tag': ['<a href="#">Link</a>', '<a href="https://example.com">Visit</a>', '<a href="page.html">Go</a>'],
    'href': ['<a href="page.html">Link</a>', '<a href="https://example.com">Link</a>', '<a href="#section">Jump</a>'],
    'target': ['<a href="https://example.com" target="_blank">Open new</a>', '<a target="_blank" href="#">New tab</a>', '<a href="#" target="_blank" rel="noopener">Link</a>'],
    'relative vs absolute': ['<a href="about.html">Relative</a>', '<a href="https://example.com">Absolute</a>', '<a href="/folder/page.html">Absolute path</a>'],
    'internal links': ['<a href="#section">Go to section</a>', '<a href="#top">Back to top</a>', '<h2 id="section">Section</h2>\n<a href="#section">Jump</a>'],
    'download attribute': ['<a href="file.pdf" download>Download</a>', '<a download href="image.png">Save image</a>', ''],
    'mailto': ['<a href="mailto:user@example.com">Email</a>', '<a href="mailto:user@example.com?subject=Hello">Email</a>', ''],
    'tel': ['<a href="tel:+1234567890">Call</a>', '<a href="tel:555-1234">Phone</a>', ''],
    'img tag': ['<img src="image.png" alt="Description">', '<img src="photo.jpg" alt="A photo">', '<img src="pic.gif" alt="">'],
    'src': ['<img src="image.png" alt="">', '<img src="/images/logo.png" alt="Logo">', '<img src="https://example.com/img.png" alt="">'],
    'alt': ['<img src="photo.jpg" alt="A person smiling">', '<img src="chart.png" alt="Sales chart">', '<img src="x.png" alt="Diagram">'],
    'table structure': ['<table>\n  <tr><td>Cell</td></tr>\n</table>', '<table><tr><th>Header</th></tr><tr><td>Data</td></tr></table>', '<table><tr><td>A</td><td>B</td></tr></table>'],
    'form tag': ['<form action="/submit" method="post">\n  <button type="submit">Submit</button>\n</form>', '<form>\n  <input type="text">\n</form>', '<form action="save">\n</form>'],
    'input types': ['<input type="text">', '<input type="email">', '<input type="text">\n<input type="password">\n<input type="number">'],
    'labels': ['<label for="name">Name</label>\n<input id="name" type="text">', '<label>Name <input type="text"></label>', '<label for="email">Email:</label>\n<input id="email" type="email">'],
    'header': ['<header>\n  <nav>...</nav>\n</header>', '<header><h1>Site Title</h1></header>', '<header></header>'],
    'footer': ['<footer>&copy; 2024</footer>', '<footer><p>Contact</p></footer>', '<footer></footer>'],
    'main': ['<main>\n  <h1>Content</h1>\n</main>', '<main><article>...</article></main>', '<main></main>'],
    'nav': ['<nav>\n  <a href="/">Home</a>\n  <a href="/about">About</a>\n</nav>', '<nav><ul><li><a href="#">Link</a></li></ul></nav>', '<nav></nav>'],
    'article': ['<article>\n  <h2>Title</h2>\n  <p>Content</p>\n</article>', '<article></article>', ''],
    'section': ['<section>\n  <h2>Section Title</h2>\n</section>', '<section></section>', '<section><p>Text</p></section>'],
    'id and class': ['<div id="main">', '<p class="intro">', '<div id="header" class="dark">']
  },
  javascript: {
    'let and const': ['let x = 5;', 'const PI = 3.14;', 'let name = "Alice";\nconsole.log(name);'],
    'var hoisting': ['var x = 10;', 'console.log(y);\nvar y = 5;', 'var a, b, c;'],
    'primitive types': ['let n = 42;', 'let s = "hello";', 'let b = true;\nlet u = undefined;\nlet nu = null;'],
    'typeof': ['typeof 42', 'typeof "hello"', 'console.log(typeof {});'],
    'strings': ['"hello"', "'world'", '`template ${x}`'],
    'numbers': ['let n = 42;', 'let f = 3.14;', 'let hex = 0xff;'],
    'booleans': ['true', 'false', 'let ok = true;'],
    'function declarations': ['function greet() {\n  console.log("Hello");\n}', 'function add(a, b) {\n  return a + b;\n}', 'function say(name) {\n  return "Hi " + name;\n}'],
    'arrow functions': ['const fn = () => {};', 'const add = (a, b) => a + b;', 'const greet = () => console.log("Hi");'],
    'creating arrays': ['const arr = [];', 'const nums = [1, 2, 3];', 'const mixed = [1, "a", true];'],
    'push and pop': ['arr.push(1);', 'arr.pop();', 'const a = [];\na.push(1);\na.pop();'],
    'map': ['arr.map(x => x * 2);', '[1,2,3].map(n => n + 1);', 'arr.map(item => item.name);'],
    'filter': ['arr.filter(x => x > 0);', '[1,2,3,4].filter(n => n % 2 === 0);', 'arr.filter(x => x);'],
    'reduce': ['arr.reduce((a, b) => a + b, 0);', '[1,2,3].reduce((sum, n) => sum + n);', 'arr.reduce((acc, x) => acc + x, "");'],
    'if/else': ['if (x > 0) {\n  console.log("positive");\n} else {\n  console.log("negative");\n}', 'if (ok) doSomething();', 'if (a) {} else if (b) {} else {}'],
    'for loops': ['for (let i = 0; i < 5; i++) {\n  console.log(i);\n}', 'for (let i = 0; i < arr.length; i++) {}', 'for (;;) {}'],
    'object literals': ['const obj = {};', 'const o = { name: "Alice", age: 30 };', 'const p = { x: 1, y: 2 };'],
    'console.log': ['console.log("Hello");', 'console.log(1, 2, 3);', 'console.log("x =", x);'],
    'template literals': ['`Hello ${name}`', '`Sum: ${a + b}`', '`Line 1\\nLine 2`']
  },
  css: {
    'element selector': ['p { color: blue; }', 'h1 { font-size: 2rem; }', 'div { padding: 10px; }'],
    'class selector': ['.intro { font-weight: bold; }', '.container { max-width: 1200px; }', '.btn { padding: 8px 16px; }'],
    'ID selector': ['#header { background: #333; }', '#main { width: 100%; }', '#nav { display: flex; }'],
    'padding': ['padding: 10px;', 'padding: 10px 20px;', 'padding: 1rem 2rem 1rem 2rem;'],
    'margin': ['margin: 0 auto;', 'margin: 1rem;', 'margin-bottom: 20px;'],
    'flexbox basics': ['display: flex;', 'display: flex;\nflex-direction: row;', 'display: flex;\njustify-content: center;'],
    'justify-content': ['justify-content: center;', 'justify-content: space-between;', 'justify-content: flex-start;'],
    'align-items': ['align-items: center;', 'align-items: flex-end;', 'align-items: stretch;'],
    'color': ['color: #333;', 'color: rgb(255, 0, 0);', 'color: blue;'],
    'font-size': ['font-size: 16px;', 'font-size: 1rem;', 'font-size: 1.5em;'],
    'media queries': ['@media (max-width: 600px) {\n  .box { width: 100%; }\n}', '@media (min-width: 768px) {}', '@media screen and (max-width: 480px) {}']
  },
  python: {
    'integers': ['x = 42', 'age = 25', 'a, b = 1, 2'],
    'floats': ['x = 3.14', 'pi = 3.14159', 'rate = 0.5'],
    'strings': ['s = "hello"', "s = 'world'", 's = """multi\nline"""'],
    'booleans': ['x = True', 'y = False', 'ok = True'],
    'print': ['print("Hello")', 'print(1, 2, 3)', 'print(f"Value: {x}")'],
    'type function': ['type(42)', 'type("hello")', 'print(type([]))'],
    'if/elif/else': ['if x > 0:\n    print("positive")', 'if a:\n    pass\nelif b:\n    pass\nelse:\n    pass', 'if n % 2 == 0:\n    print("even")'],
    'for loops': ['for i in range(5):\n    print(i)', 'for item in items:\n    print(item)', 'for i, x in enumerate(lst):\n    print(i, x)'],
    'range': ['range(5)', 'range(1, 10)', 'range(0, 10, 2)'],
    'def keyword': ['def greet():\n    print("Hi")', 'def add(a, b):\n    return a + b', 'def fn():\n    pass'],
    'return': ['return x', 'return a + b', 'return'],
    'list comprehension': ['[x*2 for x in nums]', '[n for n in range(10) if n % 2 == 0]', '[c.upper() for c in "hello"]'],
    'dict creation': ['d = {}', 'd = {"a": 1, "b": 2}', 'd = dict(a=1, b=2)']
  }
};

function getRealCode(category, item) {
  const c = REAL_CODE[category];
  if (!c) return null;
  const key = Object.keys(c).find(k => k.toLowerCase() === item.toLowerCase());
  return key ? c[key] : null;
}

// Keywords that must appear in code for the lesson to pass (at least one match, case-insensitive)
function getValidationKeywords(category, item) {
  const itemKey = item.toLowerCase();
  const VALID = {
    html: {
      'doctype': ['<!doctype', 'doctype html'],
      'html tag': ['<html', '</html>'],
      'head': ['<head', '</head>'],
      'body': ['<body', '</body>'],
      'meta tags': ['<meta'],
      'title': ['<title', '</title>'],
      'charset': ['charset'],
      'viewport': ['viewport'],
      'headings': ['<h1', '<h2', '<h3'],
      'paragraphs': ['<p', '</p>'],
      'bold and italic': ['<strong', '<em', '<b', '<i'],
      'lists': ['<ul', '<ol', '<li'],
      'anchor tag': ['<a ', '<a>'],
      'href': ['href='],
      'img tag': ['<img', 'src=', 'alt='],
      'table structure': ['<table', '<tr', '<td', '<th'],
      'form tag': ['<form'],
      'input types': ['type="text"', 'type="email"', '<input'],
      'header': ['<header'],
      'footer': ['<footer'],
      'main': ['<main'],
      'nav': ['<nav'],
      'section': ['<section'],
      'article': ['<article']
    },
    javascript: {
      'let and const': ['let ', 'const '],
      'var hoisting': ['var '],
      'primitive types': ['typeof', 'null', 'undefined', 'true', 'false'],
      'typeof': ['typeof'],
      'strings': ['"', "'", '`'],
      'numbers': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      'function declarations': ['function ', 'function('],
      'arrow functions': ['=>', '() =>'],
      'creating arrays': ['[', ']'],
      'push and pop': ['push', 'pop'],
      'map': ['.map(', 'map('],
      'filter': ['.filter(', 'filter('],
      'reduce': ['.reduce(', 'reduce('],
      'if/else': ['if ', 'else', 'if('],
      'for loops': ['for ', 'for('],
      'object literals': ['{', '}', ':'],
      'console.log': ['console.log', 'console.']
    },
    css: {
      'element selector': ['{', '}', ':', ';'],
      'class selector': ['.', '{'],
      'id selector': ['#', '{'],
      'padding': ['padding'],
      'margin': ['margin'],
      'flexbox basics': ['display:', 'flex'],
      'justify-content': ['justify-content'],
      'align-items': ['align-items'],
      'color': ['color:'],
      'font-size': ['font-size'],
      'media queries': ['@media', 'media']
    },
    python: {
      'integers': ['=', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      'floats': ['.', '=', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      'strings': ['"', "'", '"""'],
      'print': ['print('],
      'if/elif/else': ['if ', 'elif', 'else'],
      'for loops': ['for ', 'in ', 'range'],
      'def keyword': ['def ', 'def '],
      'lists': ['[', ']'],
      'dict creation': ['{', '}', ':', 'dict']
    }
  };
  const cat = VALID[category];
  if (cat && cat[itemKey]) return cat[itemKey];
  if (cat) {
    for (const key of Object.keys(cat)) {
      if (itemKey.includes(key) || key.includes(itemKey)) return cat[key];
    }
  }
  if (category === 'hacker' || category === 'gameDesign') {
    return ['console', 'const', 'let', 'function', '=>', 'log', '='];
  }
  return item.split(/\s+/).filter(w => w.length > 2);
}

function generateLessons(categoryKey) {
  const config = LESSON_CONFIG[categoryKey];
  if (!config) return [];
  const lessons = [];
  let id = 1;
  config.topics.forEach((topic, topicIdx) => {
    topic.items.forEach((item, itemIdx) => {
      const lessonNum = topicIdx * 50 + itemIdx + 1;
      const { content, codeExamples, instructions } = getLessonContent(categoryKey, topic.base, item, lessonNum);
      lessons.push({
        id,
        num: lessonNum,
        title: `${topic.base}: ${item}`,
        topic: topic.base,
        item,
        content,
        codeExample: codeExamples[0],
        codeExamples,
        instructions,
        practicePrompt: `Write the actual code from the examples above.`,
        validationKeywords: getValidationKeywords(categoryKey, item)
      });
      id++;
    });
  });
  while (lessons.length < 500) {
    const base = lessons[lessons.length % 100];
    lessons.push({
      ...base,
      id: lessons.length + 1,
      num: lessons.length + 1,
      title: `${base.title} (Part ${Math.floor(lessons.length / 100) + 2})`,
      content: `Building on **${base.topic}**, go deeper into **${base.title.split(': ')[1]}**.\n\nFollow the instructions, study the examples, then complete the practice.`,
      instructions: base.instructions,
      codeExamples: base.codeExamples,
      codeExample: base.codeExample,
      practicePrompt: base.practicePrompt,
      validationKeywords: base.validationKeywords
    });
  }
  return lessons.slice(0, 500);
}

function getLessonContent(category, topic, item, num) {
  const slug = item.replace(/\s/g, '-').replace(/[^a-z0-9-]/gi, '');
  const content = `In this lesson you will learn **${item}** (part of **${topic}**).\n\nRead the instructions below, study the similar examples, then complete the practice in the editor.`;

  const instructions = {
    javascript: [
      'Write the actual code. Do not use print() or describe it – type the real syntax.',
      'Copy one example into the editor. The examples show real JavaScript (let, const, functions, etc.).',
      'Run it. Modify values or add your own code, then run again.',
      'Fix any errors. When it runs correctly, mark complete.'
    ],
    html: [
      'Write the actual code. Type real HTML like <!DOCTYPE html>, <html>, <head>, <body>, etc.',
      'Copy an example (e.g. <!DOCTYPE html> for DOCTYPE, <p>Hello</p> for paragraphs).',
      'Run to preview. Change tags or text, then run again.',
      'When the page renders correctly, mark complete.'
    ],
    css: [
      'Write the actual CSS. Type real syntax: selectors, properties, values (e.g. color: red;).',
      'Copy an example into the editor. Change colors, sizes, or add rules.',
      'Run to see the preview. Adjust until it looks right.',
      'Mark complete when done.'
    ],
    python: [
      'Write the actual Python code. Type real syntax: print(), def, if, for, etc. – not descriptions.',
      'Copy one example into the editor and run it.',
      'Modify and run again. Fix errors until it works.',
      'Mark complete to move on.'
    ],
    hacker: [
      'Study the JavaScript examples. Understand the pattern.',
      'Run one example to see the output.',
      'Modify to explore the concept further.',
      'Run your code. Debug any issues.',
      'Mark complete when finished.'
    ],
    gameDesign: [
      'Read the examples. See how the concept is applied.',
      'Run one example.',
      'Modify or extend it with your own idea.',
      'Test your changes.',
      'Mark complete when done.'
    ]
  };

  const realExamples = getRealCodeExamples(category, item, topic, slug);
  return {
    content,
    instructions: instructions[category] || instructions.javascript,
    codeExamples: realExamples
  };
}

// Real code to write – actual syntax for each concept
function getRealCodeExamples(category, item, topic, slug) {
  const REAL = {
    html: {
      'DOCTYPE': ['<!DOCTYPE html>', '<!DOCTYPE html>\n<html>\n  <head></head>\n  <body></body>\n</html>', '<!DOCTYPE html>\n<html lang="en">'],
      'html tag': ['<html>', '<html lang="en">', '<html>\n  <head></head>\n  <body></body>\n</html>'],
      'head': ['<head>', '<head>\n  <meta charset="UTF-8">\n  <title>Page</title>\n</head>', '<head>\n  <link rel="stylesheet" href="style.css">\n</head>'],
      'body': ['<body>', '<body>\n  <h1>Hello</h1>\n</body>', '<body>\n  <p>Content here</p>\n</body>'],
      'meta tags': ['<meta charset="UTF-8">', '<meta name="viewport" content="width=device-width, initial-scale=1">', '<meta name="description" content="Page description">'],
      'title': ['<title>My Page</title>', '<title>Document</title>'],
      'charset': ['<meta charset="UTF-8">', '<meta charset="utf-8">'],
      'viewport': ['<meta name="viewport" content="width=device-width, initial-scale=1">'],
      'lang attribute': ['<html lang="en">', '<html lang="fr">', '<p lang="es">Hola</p>'],
      'document outline': ['<header></header>\n<main></main>\n<footer></footer>'],
      'headings': ['<h1>Heading 1</h1>', '<h2>Heading 2</h2>', '<h3>Heading 3</h3>'],
      'paragraphs': ['<p>This is a paragraph.</p>', '<p>Another paragraph here.</p>'],
      'bold and italic': ['<strong>bold</strong>', '<em>italic</em>', '<b>bold</b> <i>italic</i>'],
      'lists': ['<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>', '<ol>\n  <li>First</li>\n  <li>Second</li>\n</ol>'],
      'anchor tag': ['<a href="https://example.com">Link</a>', '<a href="page.html">Internal</a>'],
      'href': ['<a href="https://example.com">Click</a>', '<a href="#section">Jump</a>'],
      'img tag': ['<img src="photo.jpg" alt="Description">', '<img src="image.png" alt="Image">'],
      'table structure': ['<table>\n  <tr><td>A</td><td>B</td></tr>\n</table>', '<table>\n  <tr><th>Header</th></tr>\n</table>'],
      'form tag': ['<form action="/submit" method="post">\n  <input type="text" name="user">\n</form>'],
      'input types': ['<input type="text">', '<input type="email">', '<input type="password">'],
      'header': ['<header>\n  <nav>...</nav>\n</header>'],
      'footer': ['<footer>\n  <p>&copy; 2024</p>\n</footer>'],
      'main': ['<main>\n  <article>...</article>\n</main>'],
      'nav': ['<nav>\n  <a href="/">Home</a>\n</nav>'],
      'section': ['<section>\n  <h2>Title</h2>\n  <p>Content</p>\n</section>'],
      'div': ['<div class="container">\n  <p>Content</p>\n</div>']
    },
    javascript: {
      'let and const': ['let x = 5;', 'const name = "Alice";', 'let count = 0;\ncount = 1;'],
      'primitive types': ['const n = 42;\nconst s = "hello";\nconst b = true;', 'typeof 42', 'typeof "hi"'],
      'console.log': ['console.log("Hello");', 'console.log(1 + 2);', 'console.log("Sum:", 3 + 4);'],
      'function declarations': ['function greet() {\n  console.log("Hi");\n}', 'function add(a, b) {\n  return a + b;\n}'],
      'arrow functions': ['const fn = () => {};', 'const add = (a, b) => a + b;', '() => console.log("hi");'],
      'arrays': ['const arr = [1, 2, 3];', 'const list = ["a", "b"];', '[]'],
      'push and pop': ['arr.push(4);', 'arr.pop();', 'const last = arr.pop();'],
      'map': ['[1,2,3].map(x => x * 2);', 'arr.map(n => n + 1);'],
      'filter': ['[1,2,3,4].filter(n => n > 2);', 'arr.filter(x => x % 2 === 0);'],
      'if/else': ['if (x > 0) { }\nelse { }', 'if (a) b(); else c();'],
      'for loops': ['for (let i = 0; i < 10; i++) {}', 'for (let i = 0; i < arr.length; i++) {}'],
      'object literals': ['const obj = { a: 1, b: 2 };', 'const user = { name: "Alice", age: 30 };']
    },
    css: {
      'element selector': ['p { color: red; }', 'h1 { font-size: 2rem; }', 'body { margin: 0; }'],
      'class selector': ['.box { padding: 10px; }', '.header { background: blue; }'],
      'ID selector': ['#main { width: 100%; }', '#header { height: 60px; }'],
      'padding': ['.box { padding: 1rem; }', 'padding: 10px 20px;', 'padding-top: 5px;'],
      'margin': ['.box { margin: 1rem; }', 'margin: 0 auto;', 'margin-bottom: 20px;'],
      'flexbox basics': ['display: flex;', '.container { display: flex; }', 'display: flex;\nflex-direction: row;'],
      'justify-content': ['justify-content: center;', 'justify-content: space-between;', 'justify-content: flex-start;'],
      'align-items': ['align-items: center;', 'align-items: flex-end;'],
      'color': ['color: red;', 'color: #333;', 'color: rgb(255, 0, 0);'],
      'font-size': ['font-size: 16px;', 'font-size: 1rem;', 'font-size: 1.5rem;']
    },
    python: {
      'integers': ['x = 42', 'age = 25', 'num = -10'],
      'strings': ['s = "hello"', "name = 'Alice'", 'text = """multiline"""'],
      'print': ['print("Hello")', 'print(1 + 2)', 'print("Sum:", 3 + 4)'],
      'variables': ['x = 5', 'name = "Bob"', 'is_active = True'],
      'for loops': ['for i in range(5):\n    print(i)', 'for item in [1,2,3]:\n    print(item)'],
      'if/elif/else': ['if x > 0:\n    print("positive")\nelif x < 0:\n    print("negative")\nelse:\n    print("zero")'],
      'def keyword': ['def greet():\n    print("Hi")', 'def add(a, b):\n    return a + b'],
      'lists': ['lst = [1, 2, 3]', 'items = ["a", "b"]', 'empty = []'],
      'append': ['lst.append(4)', 'items.append("c")'],
      'dictionaries': ['d = {"a": 1, "b": 2}', 'user = {"name": "Alice"}']
    }
  };

  const cat = REAL[category];
  if (cat && cat[item]) return cat[item].map(ex => ex);
  if (cat) {
    for (const key of Object.keys(cat)) {
      if (item.toLowerCase().includes(key) || key.includes(item.toLowerCase())) return cat[key];
    }
  }

  // Fallback: generate real syntax from item
  const fb = {
    html: [`<${slug || 'div'}>\n  <p>Content</p>\n</${slug || 'div'}>`],
    javascript: [`const ${slug || 'example'} = "${item}";\nconsole.log(${slug || 'example'});`],
    css: [`.${slug || 'box'} {\n  /* ${item} */\n}`],
    python: [`# ${item}\nprint("${item}")`]
  };
  return (fb[category] || fb.javascript);
}

const LESSONS = {};
Object.keys(LESSON_CONFIG).forEach(key => {
  LESSONS[key] = generateLessons(key);
});
if (typeof window !== 'undefined') {
  window.LESSONS = LESSONS;
  window.LESSON_CONFIG = LESSON_CONFIG;
}
