import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
  const BASE_URL = "https://customsearch.googleapis.com/customsearch/v1"

  const API_KEY = process.env.REACT_APP_API_KEY
  const SEARCH_ID = process.env.REACT_APP_SEARCH_ENGINE_ID

  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleBye = () => {
    const botMessage = createChatBotMessage('Thank you for using me. Have a great day!');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleIntro = () => {
    const botMessage = createChatBotMessage('I am Stack Overflow bot. I am here to answer your questions');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDS = () => {
    const botMessage = createChatBotMessage('A data structure is a storage format that defines the way data is stored, organized, and manipulated. Some popular data structures are Arrays, Trees, and Graphs.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleArray = () => {
    const botMessage = createChatBotMessage('An array is commonly referred to as a collection of items stored at contiguous memory locations. Items stored are of the same type. It organizes data so that a related set of values can be easily sorted or searched.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleLinkedList = () => {
    const botMessage = createChatBotMessage('Like an array, a linked list refers to a linear data structure in which the elements are not necessarily stored in a contiguous manner. It is basically a sequence of nodes, each node points towards the next node forming a chain-like structure.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleStack = () => {
    const botMessage = createChatBotMessage('A stack refers to a linear data structure performing operations in a LIFO (Last In First Out) order. In a stack, elements can only be accessed, starting from the topmost to the bottom element.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleLIFO = () => {
    const botMessage = createChatBotMessage('LIFO is an abbreviation for Last In First Out. It is a way of accessing, storing and retrieving data. It extracts the data that was stored last first.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleFIFO = () => {
    const botMessage = createChatBotMessage('FIFO stands for First In First Out. It is a way of accessing, storing and retrieving data. The data that was stored first is extracted first.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleQueue = () => {
    const botMessage = createChatBotMessage('A queue refers to a linear data structure that performs operations in a FIFO order. In a queue, the least recently added elements are removed first as opposed to a stack. ');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleBinaryTrees = () => {
    const botMessage = createChatBotMessage('A binary tree is an extension of the linked list structure where each node has at most two children. A binary tree has two nodes at all times, a left node and a right node.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleRecursion = () => {
    const botMessage = createChatBotMessage('Recursion refers to a function calling itself based on a terminating condition. It uses LIFO and therefore makes use of the stack data structure.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleOOP = () => {
    const botMessage = createChatBotMessage('OOPs stands for Object-Oriented Programming System, a paradigm that provides concepts such as objects, classes, and inheritance.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleOopConcept = () => {
    const botMessage = createChatBotMessage('Object, Class, Polymorphism, Inheritance, Encapsulation, Abstraction');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleBiSearchTree = () => {
    const botMessage = createChatBotMessage('A binary search tree is used to store data in a manner that it can be retrieved very efficiently. The left sub-tree contains nodes whose keys are less than the node’s key value.The right sub-tree contains nodes whose keys are greater than or equal to the node’s key value');
 
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDoubleLL = () => {
    const botMessage = createChatBotMessage('Doubly linked lists are categorized as a special type of linked list in which traversal across the data elements can be done in both directions. This is made possible by the presence of two links in every node, one that links to the node next to it and another that connects to the node before it.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleGraph = () => {
    const botMessage = createChatBotMessage('A graph is a particular type of data structure that contains a set of ordered pairs. The ordered pairs in a graph are also known as edges or arcs and are most commonly used to connect nodes where the data can be stored and retrieved.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDeque = () => {
    const botMessage = createChatBotMessage('A deque is a double-ended queue. This is a structure in which elements can be inserted or removed from either end.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleSortingAlgorithm = () => {
    const botMessage = createChatBotMessage('There are many types of sorting algorithms: bubble sort, quick sort, balloon sort, merge sort, radix sort, and more.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDDS = () => {
    const botMessage = createChatBotMessage('Dynamic data structures have the feature where they expand and contract as a program runs. It provides a very flexible method of data manipulation because adjusts based on the size of the data to be manipulated.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleLanguages = () => {
    const botMessage = createChatBotMessage('Javascript, Python, Go, Java, Kotlin, C, and C++');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleJavascript = () => {
    const botMessage = createChatBotMessage('JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS. JavaScript can calculate, manipulate and validate data.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handlePython = () => {
    const botMessage = createChatBotMessage('Python is a popular programming language. It was created by Guido van Rossum, and released in 1991. It is used for: web development (server-side), software development, mathematics, system scripting.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleC = () => {
    const botMessage = createChatBotMessage('C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972. It is a very popular language, despite being old. C is strongly associated with UNIX, as it was developed to write the UNIX operating system.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleCPP = () => {
    const botMessage = createChatBotMessage('C++ (or “C-plus-plus”) is a general-purpose programming and coding language. C++ is used in developing browsers, operating systems, and applications, as well as in-game programming, software engineering, data structures, etc.5');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDatabases = () => {
    const botMessage = createChatBotMessage('In computing, a database is an organized collection of data stored and accessed electronically. Small databases can be stored on a file system, while large databases are hosted on computer clusters or cloud storage.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleReactJS = () => {
    const botMessage = createChatBotMessage('React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleNodeJS = () => {
    const botMessage = createChatBotMessage('Node.js is an open-source server environment. Node.js is cross-platform and runs on Windows, Linux, Unix, and macOS. Node.js is a back-end JavaScript runtime environment. Node.js runs on the V8 JavaScript Engine and executes JavaScript code outside a web browser.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleHTMLCSS = () => {
    const botMessage = createChatBotMessage('    // HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleJandF = () => {
    const botMessage = createChatBotMessage('Java is a high-level, class-based, object-oriented programming language and Flutter is an open-source UI software development kit created by Google.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handlePandF = () => {
    const botMessage = createChatBotMessage('Python is a high-level, general-purpose programming language and Flutter is an open-source UI software development kit created by Google.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handlePandJ = () => {
    const botMessage = createChatBotMessage('Python is a high-level, general-purpose programming language and Java is a high-level, class-based, object-oriented programming language.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const Handle = (input) => {

    const list = ['.ql', '@formula', 'a+ (a plus)', 'a++', 'a-0 system', 'a.net (a#/a sharp)', 'abap', 'abc', 'abc algol', 'acc', 'accelerometer', 'accent (rational synergy)', 'ace dasl (distributed application specification language)', 'action!', 'actionscript', 'actor', 'ada â€“ iso/iec 8652', 'adenine (haystack)', 'adsl', 'advpl', 'agda', 'agilent vee (keysight vee)', 'agora', 'aimms', 'aldor', 'alef', 'alf', 'algol 58', 'algol 60', 'algol 68', 'algol w', 'alice (alice ml)', 'alma-0', 'ambienttalk', 'amiga e', 'amos (amos basic)', 'ampl', 'analitik', 'android', 'angelscript', 'apache pig latin', 'apex (salesforce.com, inc)', 'apl', "app inventor for android's visual block language (mit app inventor)", 'apple inc.', 'applescript', 'apt', 'arc', 'archive', 'arexx', 'argus', 'artificial intelligence', 'assembly language (asm)', 'atx', 'autohotkey', 'autoit', 'autolisp / visual lisp', 'averest', 'awk', 'axum', 'b', 'b', 'babbage', 'backlink', 'backup', 'ballerina', 'bandwidth', 'barcode', 'bash', 'basic', 'batch file (windows/ms-dos)', 'bc (basic calculator)', 'bcpl', 'beanshell', 'benchmark', 'beta', 'binary', 'bios', 'bitcoin', 'bitmap', 'bittorrent', 'blacklist', 'bliss', 'bloatware', 'blockly', 'bloop', 'bluetooth', 'boo', 'boomerang', 'booting or boot loader', 'bosque', 'broadband lifecycle', 'burn', 'bus', 'c', 'c', 'c shell (csh)', 'c â€“ iso/iec 9899', 'c#', 'c# (c sharp) â€“ iso/iec 23270', 'c*', 'c++', 'c++ (c plus plus) â€“ iso/iec 14882', 'c-- (c minus minus)', 'c/al', 'cache', 'cachã© objectscript', 'caml', 'carbon', 'catrobat', 'cayenne (lennart augustsson)', 'cduce', 'cecil', 'ceemac', 'central processing unit', 'cesil (computer education in schools instruction language)', 'ceylon', 'cfengine', 'cg (high-level shader/shading language [hlsl])', 'ch', 'chapel (cascade high productivity language)', 'charm', 'chill', 'chip-8', 'chuck', 'cilk (also cilk++ and cilk plus)', 'claire', 'clarion', 'clean', 'client', 'clipper', 'clips', 'clist', 'clojure', 'clu', 'cmos', 'cms exec (exec)', 'cms-2', 'cobol â€“ iso/iec 1989', 'cobolscript â€“ cobol scripting language', 'cobra', 'code', 'coding', 'coffeescript', 'coldfusion', 'comal', 'comit', 'common intermediate language (cil)', 'common lisp (also known as cl)', 'compass', 'component pascal', 'compression', 'comtran', 'constraint handling rules (chr)', 'content', 'control language', 'cookie', 'cool', 'coq', 'coral 66', 'corvision', 'cowsel', 'cpl', 'cpu', 'cryptol', 'crystal', 'csound', 'cuneiform', 'curl', 'curry', 'cyber crime', 'cybersecurity', 'cybil', 'cyclone', 'cypher query language', 'cython', 'cã©u', 'd', 'd (also known as dlang)', 'daemon', 'dart', 'darwin', 'data', 'dataflex', 'datalog', 'datatrieve', 'dax (data analysis expressions)', 'dbase', 'dc', 'dcl (digital command language)', 'debug', 'delphi', 'determinancy diagramming', 'developer', 'device driver', 'dibol', 'digital subscriber line (dsl)', 'dinkc', 'dock', 'dog', 'dos', 'dpi', 'draco', 'drakon', 'driver', 'drm', 'dylan', 'dynamo', 'e', 'e', 'ease', 'easy pl/i', 'easytrieve plus', 'ec', 'ecmascript', 'edinburgh imp', 'egl', 'eiffel', 'elan', 'elixir', 'elm', 'emacs lisp', 'email', 'emerald', 'emulator', 'encoding', 'encryption', 'end user', 'epigram', 'epl (easy programming language)', 'erlang', 'es', 'escher', 'espol', 'esterel', 'ethernet', 'etoys', 'euclid', 'euler', 'euphoria', 'euslisp robot programming language', 'exabyte', 'exbibyte', 'exe', 'exec 2', 'executable', 'executable uml', 'ezhil', 'f', 'f# (f sharp)', 'f*', 'f-script', 'factor', 'fantom', 'fat32', 'faust', 'ffp', 'firewall', 'firmware', 'fish', 'fjã¶lnir', 'fl', 'flagship', 'flavors', 'flex', 'flix', 'floop', 'flow-matic (b0)', 'flutter', 'focal (formulating on-line calculations in algebraic language/formula calculator)', 'focus', 'foil', 'formac (formula manipulation compiler)', 'forth', 'fortran â€“ iso/iec 1539', 'fortress', 'foxbase/foxpro', 'fp', 'framework', 'franz lisp', 'freeware', 'frictionless sharing', 'ftp', 'futhark', 'g-code', 'game maker language', 'gamemonkey script', 'gams (general algebraic modeling system)', 'gap', 'gdl (geometric description language)', 'gdscript (godot)', 'genie', 'george', 'gif', 'git', 'glsl (opengl shading language)', 'gnu e', 'gnu guile (gnu ubiquitous intelligent language for extensions)', 'go', 'go!', 'goal (game oriented assembly lisp)', 'golo', 'gom (good old mad)', 'google apps script', 'gosu', 'gotran (ibm 1620)', 'gps', 'gpss (general purpose simulation system)', 'graphtalk (computer sciences corporation)', 'grass', 'grasshopper', 'groovy (apache groovy)', 'gsm', 'gui', 'gã¶del', 'hack', 'haggis', 'hal/s', 'halide (programming language)', 'hamilton c shell', 'harbour', 'hartmann pipelines', 'haskell', 'haxe', 'hdmi', 'hermes', 'high level assembly (hla)', 'hlsl', 'hollywood', 'holyc (templeos)', 'hop', 'hope', 'hopscotch', 'html', 'http', 'https', 'hume', 'hy', 'hypertalk', 'i/o', 'ibm basic assembly language', 'ibm hascript', 'ibm informix-4gl', 'ibm rpg', 'icon', 'idl', 'idris', 'ieee', 'imei', 'inform', 'internet', 'internet protocol (ip)', 'internetworking', 'io', 'ios', 'ip address', 'islisp', 'iso', 'isp', 'j', 'j# (j sharp)', 'j++ (j plus plus)', 'jade', 'jai', 'jal', 'janus (concurrent constraint programming language)', 'janus (time-reversible computing programming language)', 'jass', 'java', 'java', 'javafx script', 'javascript', 'javascript', 'jcl', 'jean', 'jess', 'join java', 'joss', 'joule', 'jovial', 'joy', 'jpeg', 'jscript', 'jscript .net', 'julia', 'jython', 'k', 'kaleidoscope', 'karel', 'kee', 'kernel', 'keyboard', 'kif (knowledge interchange format)', 'kixtart', 'klerer-may system', 'kodu', 'kojo', 'kornshell (ksh)', 'kotlin', 'krc', 'krl', 'krl (kuka robot language)', 'krypton', 'ksql', 'kv (kivy)', 'labview', 'ladder', 'language h', 'lansa', 'lasso', 'lava', 'lc-3', 'lean', 'legoscript', 'lil', 'lilypond', 'limbo', 'limnor', 'linc', 'lingo', 'linq', 'lis', 'lisa', 'lisp â€“ iso/iec 13816', 'lite-c', 'lithe', 'little b', 'livecode', 'livescript', 'lll', 'logo', 'logtalk', 'lotusscript', 'lpc', 'lse', 'lsl', 'lte', 'lte-sim', 'lua', 'lucid', 'lustre', 'lyapas', 'lynx', 'm formula language', 'm#', 'm2001', 'm4', 'machine', 'machine code', 'macintosh (mac)', 'mad (michigan algorithm decoder)', 'mad/i', 'magik', 'magma', 'malbolge', 'malware', 'maple', 'mapper (now part of bis)', 'mark-iv (now vision:builder)', 'mary', 'masm microsoft assembly x86', 'math-matic', 'matlab', 'maude system', 'max (max msp â€“ graphical programming environment)', 'maxima (see also macsyma)', 'maxscript internal language 3d studio max', 'maya (mel)', 'mdl', 'mercury', 'mesa', 'mheg-5 (interactive tv programming language)', 'microcode', 'microsoft power fx', 'midi', 'miis', 'milk (programming language)', 'mimic', 'mirah', 'miranda', 'miva script', 'ml', 'mms', 'model 204', 'modelica', 'modula', 'modula-2', 'modula-3', 'mohol', 'monotonic query', 'moo', 'mortran', 'mouse', 'mp3', 'mp4', 'mpd', 'mpeg', 'msl', 'mumps', 'mupad', 'mutan', 'mystic programming language (mpl)', 'mã¡ni', 'napier88', 'nasm', 'neko', 'nemerle', 'nesl', 'net.data', 'netlogo', 'netrexx', 'newbie', 'newlisp', 'newp', 'newspeak', 'newtonscript', 'nial', 'nickle (nitin)', 'nim', 'nix (systems configuration language)', 'not exactly c (nxc)', 'not quite c (nqc)', 'npl', 'nsis', 'nu', 'nwscript', 'nxt-g', 'o:xml', 'oak', 'oberon', 'obj2', 'object lisp', 'object pascal', 'object rexx', 'object-oriented programming (oop)', 'objective-c', 'objectlogo', 'obliq', 'ocaml', 'occam', 'occam-ï€', 'ocr', 'octave', 'oem', 'omnimark', 'opa', 'opal', 'open programming language (opl)', 'opencl', 'openedge advanced business language (abl)', 'openqasm', 'openvera', 'ops5', 'optimj', 'orc', 'orca/modula-2', 'oriel', 'orwell', 'os', 'osi (7-layer) model', 'overclock', 'overheat', 'oxygene', 'oz', 'p', 'p', 'p4', 'parasail', 'pari/gp', 'pascal script', 'pascal â€“ iso 7185', 'pcastl', 'pcf', 'pdf', 'pdl', 'pearl', 'peoplecode', 'perl', 'pharo', 'phishing', 'php', 'pico', 'picolisp', 'pict', 'pike', 'pilot', 'pipelines', 'pizza', 'pl-11', 'pl/0', 'pl/b', 'pl/c', 'pl/i â€“ iso 6160', 'pl/m', 'pl/p', 'pl/s', 'pl/sql', 'pl360', 'planc', 'plankalkã¼l', 'planner', 'plex', 'plexil', 'plug-in', 'plus', 'png', 'pop-11', 'pop-2', 'portable', 'postscript', 'pov-ray sdl', 'powerbuilder â€“ 4gl gui application generator from sybase', 'powerhouse', 'powershell', 'ppl', 'pro*c', 'processing', 'processing.js', 'processor', 'prograph', 'project verona', 'prolog', 'promal', 'promela', 'prose modeling language', 'protel', 'providex', 'pure', 'pure data', 'purescript', 'pwct', 'python', 'python', 'pâ€²â€²', 'q', 'q# ', 'qalb', 'qpl', 'qtscript', 'quakec', 'quantum computation language', 'qwerty', 'r', 'r++', 'racket', 'raid', 'raku', 'ram', 'rapid', 'rapira', 'ratfiv', 'ratfor', 'rc', 'read-only memory (rom)', 'reason', 'rebol', 'recycle bin', 'red', 'redcode', 'refal', 'registry', 'remote access', 'rexx', 'ring', 'roop', 'rooting', 'rpg', 'rpl', 'rsl', 'rtl/2', 'ruby', 'rust', 's', 's-lang', 's-plus', 's/sl', 's2', 's3', 'sa-c', 'sabretalk', 'safe mode', 'sail', 'sako', 'sas', 'sasl', 'sather', 'sawzall', 'sbl', 'scala', 'scalable vector graphics (svg)', 'scheme', 'scilab', 'scratch', 'script.net', 'search engine', 'search engine optimization', 'secure sockets layer (ssl)', 'sed', 'seed7', 'self', 'sensetalk', 'seo', 'sequencel', 'serpent', 'server', 'service pack', 'setl', 'short code', 'signal', 'simple', 'simpol', 'simscript', 'simula', 'simulink', 'sisal', 'skill', 'slip', 'small', 'smalltalk', 'sml', 'snap!', 'snobol (spitbol)', 'snowball', 'software', 'sol', 'solidity', 'sophaeros', 'source', 'source code', 'sp/k', 'spam', 'spark', 'speakeasy', 'speedcode', 'spin', 'sps', 'sql', 'sqr', 'squeak', 'squirrel', 'sr', 'ssid', 'starlogo', 'stata', 'stateflow', 'strand', 'strongtalk', 'subtext', 'supercollider', 'superplan', 'supertalk', 'svga', 'swift (apple programming language)', 'swift (parallel scripting language)', 'swype', 'sympl', 't', 't-sql (transact-sql)', 'tacl', 'tacpol', 'tads (text adventure development system)', 'tal', 'tcl', 'tea', 'teco (text editor and corrector)', 'telcomp', 'tex', 'tex (text executive programming language)', 'tie', 'tmg (transmo griffer), compiler-compiler', 'toi', 'tom', 'topspeed (clarion)', 'tpu (text processing utility)', 'trac', 'transcript (livecode)', 'trash', 'ttcn (tree and tabular combined notation)', 'ttm', 'turing', 'tutor (plato author language)', 'txl', 'tynker', 'typescript', 'ubercode', 'ucsd pascal', 'umple', 'underclock', 'unicon', 'uniface', 'unity', 'unix', 'unrealscript', 'vala', 'vector graphics', 'vga', 'vim script', 'viper (ethereum/ether (eth))', 'virus', 'visual dataflex', 'visual dialogscript', 'visual foxpro', 'visual j++ (visual j plus plus)', 'visual lisp', 'visual objects', 'visual prolog', 'voip (voice over ip)', 'watfiv, watfor (waterloo fortran iv)', 'web', 'webassembly', 'webdna', 'webm', 'whiley', 'wi-fi and hotspot (wi-fi)', 'wikipedia zero', 'winbatch', 'windows', 'wireless lan', 'wolfram language', 'world wide web', 'wpa', 'wysiwyg', 'wyvern', 'x++ (x plus plus/microsoft dynamics ax)', 'x10', 'xbase++ (xbase plus plus)', 'xbl', 'xc (targets xmos architecture)', 'xharbour', 'xl', 'xod', 'xojo', 'xotcl', 'xpl', 'xpl0', 'xquery', 'xsb', 'xsharp (x#)', 'xslt', 'xtend', 'y2k', 'yoix', 'yorick', 'yql', 'z notation', 'z shell', 'z++', 'zebra, zpl, zpl2', 'zeno', 'zetalisp', 'zig', 'zonnon', 'zopl', 'zpl']

    if (list.some(word => input.includes(word)))  {
      fetch(`${BASE_URL}?key=${API_KEY}&cx=${SEARCH_ID}&q=${input}`)
      .then((res)=>res.json())
      .then(data=>{
        const botMessage = createChatBotMessage(data.items[1].snippet+data.items[0].snippet);
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      })
    }
    };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,handleBye,handleIntro,handleDS,handleArray,
            handleLinkedList,handleLIFO,handleStack,handleFIFO,
            handleQueue,handleBinaryTrees,handleRecursion,handleOOP,
            handleOopConcept,handleBiSearchTree,handleDoubleLL,
            handleGraph,handleDeque,handleSortingAlgorithm,handleDDS,
            handleLanguages,handleJavascript,handlePython,handleC,
            handleCPP,handleDatabases,handleReactJS,handleNodeJS,handleHTMLCSS,
            handleJandF, handlePandF, handlePandJ, Handle,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;