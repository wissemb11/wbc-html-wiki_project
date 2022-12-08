let full_atts={
    "!DOCTYPE": {
        "browser": {},
        "attrs": {},
        "desc": "Defines the document type",
        "type": "Basic HTML"
    },
    "html": {
        "browser": {},
        "attrs": {},
        "desc": "Defines an HTML document",
        "type": "Basic HTML"
    },
    "head": {
        "browser": {},
        "attrs": {},
        "desc": "Defines information about the document",
        "type": "Meta Info"
    },
    "title": {
        "browser": {
            "chr": true,
            "ie": true,
            "fx": true,
            "saf": true,
            "op": true
        },
        "attrs": {},
        "desc": " Defines a title for the document",
        "type": "Basic HTML"
    },
    "body": {
        "browser": {
            "chr": true,
            "ie": true,
            "fx": true,
            "saf": true,
            "op": true
        },
        "attrs": {},
        "desc": "Defines the descnt's body",
        "type": "Basic HTML"
    },
    "h1": {
        "browser": {},
        "attrs": {},
        "desc": "Defines HTML headings size 1",
        "type": "Basic HTML"
    },
    "h2": {
        "browser": {},
        "attrs": {},
        "desc": "Defines HTML headings size 2",
        "type": "Basic HTML"
    },
    "h3": {
        "browser": {},
        "attrs": {},
        "desc": "Defines HTML headings size 3",
        "type": "Basic HTML"
    },
    "h4": {
        "browser": {},
        "attrs": {},
        "desc": "Defines HTML headings size 4",
        "type": "Basic HTML"
    },
    "h5": {
        "browser": {},
        "attrs": {},
        "desc": "Defines HTML headings size 5",
        "type": "Basic HTML"
    },
    "h6": {
        "browser": {},
        "attrs": {},
        "desc": "Defines HTML headings size 6",
        "type": "Basic HTML"
    },
    "p": {
        "browser": {},
        "attrs": {},
        "desc": " Defines a paragraph",
        "type": "Basic HTML"
    },
    "br": {
        "browser": {
            "chr": true,
            "ie": true,
            "fx": true,
            "saf": true,
            "op": true
        },
        "attrs": {},
        "desc": "Inserts a single line break",
        "type": "Basic HTML"
    },
    "hr": {
        "browser": {},
        "attrs": {},
        "desc": "Defines a thematic change in the content",
        "type": "Basic HTML"
    },
    "!--...--": {
        "browser": {},
        "attrs": {},
        "desc": "Defines a comment",
        "type": "Basic HTML"
    },
    "acronym": {
        "browser": {},
        "attrs": {},
        "desc": "Defines an acronym",
        "note": " Not supported in HTML5. Use <abbr> instead.",
        "type": "Formatting"
    },
    "abbr": {
        "browser": {
            "chr": true,
            "ie": true,
            "fx": true,
            "saf": true,
            "op": true
        },
        "attrs": {},
        "desc": "Defines an abbreviation or an acronym",
        "type": "Formatting"
    },
    "address": {
        "browser": {
            "chr": true,
            "ie": true,
            "fx": true,
            "saf": true,
            "op": true
        },
        "attrs": {},
        "desc": " Defines contact information for the author/owner of a document/article",
        "type": "Formatting"
    },
    "b": {
        "browser": {
            "chr": true,
            "ie": true,
            "fx": true,
            "saf": true,
            "op": true
        },
        "attrs": {},
        "desc": " Defines bold text",
        "type": "Formatting"
    },
    "bdi": {
        "browser": {
            "chr": 16,
            "ie": 79,
            "fx": 10,
            "saf": false,
            "op": 15
        },
        "attrs": {},
        "desc": " Isolates a part of text that might be formatted in a different direction from other text outside it",
        "type": "Formatting"
    },
    "bdo": {
        "browser": {
            "chr": true,
            "ie": true,
            "fx": true,
            "saf": true,
            "op": true
        },
        "attrs": {
            "dir": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "desc": "    Specifies the text direction for the content in an element  ",
                "note": "",
                "concern": [
                    "Global Attributes"
                ]
            }
        },
        "desc": " Overrides the current text direction",
        "type": "Formatting"
    },
    "big": {
        "browser": {},
        "attrs": {},
        "desc": "Defines big text",
        "note": " Not supported in HTML5. Use CSS instead.",
        "type": "Formatting"
    },
    "blockquote": {
        "browser": {
            "chr": true,
            "ie": true,
            "fx": true,
            "saf": true,
            "op": true
        },
        "attrs": {
            "cite": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "concern": [
                    "blockquote",
                    "del",
                    "ins",
                    "q"
                ],
                "desc": "    Specifies a URL which explains the quote/deleted/inserted text  ",
                "note": ""
            },
            "desc": "",
            "note": "",
            "concern": {
                "concern": [],
                "desc": "",
                "note": ""
            }
        },
        "desc": "Defines a section that is quoted from another source",
        "type": "Formatting"
    },
    "center": {
        "browser": {},
        "attrs": {},
        "desc": "Defines centered text",
        "note": "Not supported in HTML5. Use CSS instead.",
        "type": "Formatting"
    },
    "cite": {
        "browser": {},
        "attrs": {},
        "desc": "Defines the title of a work",
        "type": "Formatting"
    },
    "code": {
        "browser": {},
        "attrs": {},
        "desc": "Defines a piece of computer code",
        "type": "Formatting"
    },
    "del": {
        "browser": {},
        "attrs": {},
        "desc": " Defines text that has been deleted from a document",
        "type": "Formatting"
    },
    "dfn": {
        "browser": {},
        "attrs": {},
        "desc": " Specifies a term that is going to be defined within the content",
        "type": "Formatting"
    },
    "em": {
        "browser": {},
        "attrs": {},
        "desc": "Defines emphasized text ",
        "type": "Formatting"
    },
    "font": {
        "browser": {},
        "attrs": {},
        "desc": "Defines font, color, and size for text",
        "note": "Not supported in HTML5. Use CSS instead.",
        "type": "Formatting"
    },
    "i": {
        "browser": {},
        "attrs": {},
        "desc": " Defines a part of text in an alternate voice or mood",
        "type": "Formatting"
    },
    "ins": {
        "browser": {},
        "attrs": {},
        "desc": " Defines a text that has been inserted into a document",
        "type": "Formatting"
    },
    "kbd": {
        "browser": {},
        "attrs": {},
        "desc": " Defines keyboard input",
        "type": "Formatting"
    },
    "mark": {
        "browser": {},
        "attrs": {},
        "desc": "Defines marked/highlighted text",
        "type": "Formatting"
    },
    "meter": {
        "browser": {},
        "attrs": {},
        "desc": " Defines a scalar measurement within a known range (a gauge)",
        "type": "Formatting"
    },
    "pre": {
        "browser": {},
        "attrs": {},
        "desc": " Defines preformatted text",
        "type": "Formatting"
    },
    "progress": {
        "browser": {},
        "attrs": {},
        "desc": "Represents the progress of a task",
        "type": "Formatting"
    },
    "q": {
        "browser": {},
        "attrs": {},
        "desc": " Defines a short quotation",
        "type": "Formatting"
    },
    "rp": {
        "browser": {},
        "attrs": {},
        "desc": "Defines what to show in browsers that do not support ruby annotations",
        "type": "Formatting"
    },
    "rt": {
        "browser": {},
        "attrs": {},
        "desc": "Defines an explanation/pronunciation of characters (for East Asian typography)",
        "type": "Formatting"
    },
    "ruby": {
        "browser": {},
        "attrs": {},
        "desc": "Defines a ruby annotation (for East Asian typography)",
        "type": "Formatting"
    },
    "s": {
        "browser": {},
        "attrs": {},
        "desc": " Defines text that is no longer correct",
        "type": "Formatting"
    },
    "samp": {
        "browser": {},
        "attrs": {},
        "desc": "Defines sample output from a computer program",
        "type": "Formatting"
    },
    "small": {
        "browser": {},
        "attrs": {},
        "desc": " Defines smaller text",
        "type": "Formatting"
    },
    "strike": {
        "browser": {},
        "attrs": {},
        "desc": "Defines strikethrough text",
        "note": "Not supported in HTML5. Use <del> or <s> instead.",
        "type": "Formatting"
    },
    "strong": {
        "browser": {},
        "attrs": {},
        "desc": "Defines important text",
        "type": "Formatting"
    },
    "sub": {
        "browser": {},
        "attrs": {},
        "desc": " Defines subscripted text",
        "type": "Formatting"
    },
    "sup": {
        "browser": {
            "chr": true,
            "ie": true,
            "fx": true,
            "saf": true,
            "op": true
        },
        "attrs": {},
        "desc": " Defines superscripted text",
        "type": "Formatting"
    },
    "template": {
        "browser": {
            "chr": 26,
            "ie": 13,
            "fx": 22,
            "saf": 8,
            "op": 15
        },
        "attrs": {},
        "desc": "Defines a container for content that should be hidden when the page loads",
        "type": "Formatting"
    },
    "time": {
        "browser": {
            "chr": 62,
            "ie": 18,
            "fx": 22,
            "saf": 7,
            "op": 49
        },
        "attrs": {
            "datetime": {
                "browser": {
                    "chr": 62,
                    "ie": 18,
                    "fx": 22,
                    "saf": 7,
                    "op": 49
                },
                "concern": [
                    "del",
                    "ins",
                    "time"
                ],
                "desc": "    Specifies the date and time ",
                "note": ""
            }
        },
        "desc": "Defines a specific time (or datetime)",
        "type": "Formatting"
    },
    "tt": {
        "browser": {},
        "attrs": {},
        "desc": "Defines teletype text",
        "note": "Not supported in HTML5. Use CSS instead.",
        "type": "Formatting"
    },
    "u": {
        "browser": {
            "chr": true,
            "ie": true,
            "fx": true,
            "saf": true,
            "op": true
        },
        "attrs": {},
        "desc": " Defines some text that is unarticulated and styled differently from normal text",
        "type": "Formatting"
    },
    "var": {
        "browser": {
            "chr": true,
            "ie": true,
            "fx": true,
            "saf": true,
            "op": true
        },
        "attrs": {},
        "desc": " Defines a variable",
        "type": "Formatting"
    },
    "wbr": {
        "browser": {
            "chr": true,
            "ie": true,
            "fx": true,
            "saf": true,
            "op": true
        },
        "attrs": {},
        "desc": " Defines a possible line-break",
        "type": "Formatting"
    },
    "form": {
        "browser": {},
        "attrs": {},
        "desc": "Defines an HTML form for user input",
        "type": "Forms and Input"
    },
    "input": {
        "browser": {},
        "attrs": {},
        "desc": " Defines an input control",
        "type": "Forms and Input"
    },
    "textarea": {
        "browser": {
            "chr": true,
            "ie": true,
            "fx": true,
            "saf": true,
            "op": true
        },
        "attrs": {
            "autocomplete": {
                "browser": {
                    "chr": false,
                    "ie": false,
                    "fx": 59,
                    "saf": 13,
                    "op": false
                },
                "concern": [
                    "form",
                    "input"
                ],
                "desc": "    Specifies whether the <form> or the <input> element should have autocomplete enabled    ",
                "note": ""
            },
            "autofocus": {
                "browser": {
                    "chr": true,
                    "ie": 10,
                    "fx": 4,
                    "saf": true,
                    "op": true
                },
                "concern": [
                    "button",
                    "input",
                    "select",
                    "textarea"
                ],
                "desc": "    Specifies that the element should automatically get focus when the page loads   ",
                "note": ""
            },
            "cols": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "concern": [
                    "textarea"
                ],
                "desc": "    Specifies the visible width of a text area  ",
                "note": ""
            },
            "dirname": {
                "browser": {
                    "chr": true,
                    "ie": 79,
                    "fx": false,
                    "saf": true,
                    "op": true
                },
                "concern": [
                    "input",
                    "textarea"
                ],
                "desc": "    Specifies that the text direction will be submitted ",
                "note": ""
            },
            "disabled": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "concern": [
                    "button",
                    "fieldset",
                    "input",
                    "optgroup",
                    "option",
                    "select",
                    "textarea"
                ],
                "desc": "    Specifies that the specified element/group of elements should be disabled   ",
                "note": ""
            },
            "form": {
                "browser": {
                    "chr": true,
                    "ie": 11,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "concern": [
                    "button",
                    "fieldset",
                    "input",
                    "label",
                    "meter",
                    "object",
                    "output",
                    "select",
                    "textarea"
                ],
                "desc": "    Specifies the name of the form the element belongs to   ",
                "note": ""
            },
            "maxlength": {
                "browser": {
                    "chr": true,
                    "ie": 10,
                    "fx": 4,
                    "saf": true,
                    "op": true
                },
                "concern": [
                    "input",
                    "textarea"
                ],
                "desc": "    Specifies the maximum number of characters allowed in an element    ",
                "note": ""
            },
            "minlength": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "concern": [],
                "desc": "",
                "note": ""
            },
            "name": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "concern": [
                    "button",
                    "fieldset",
                    "form",
                    "iframe",
                    "input",
                    "map",
                    "meta",
                    "object",
                    "output",
                    "param",
                    "select",
                    "textarea"
                ],
                "desc": "    Specifies the name of the element   ",
                "note": ""
            },
            "placeholder": {
                "browser": {
                    "chr": true,
                    "ie": 10,
                    "fx": 4,
                    "saf": 5,
                    "op": 11.5
                },
                "concern": [
                    "input",
                    "textarea"
                ],
                "desc": "    Specifies a short hint that describes the expected value of the element ",
                "note": ""
            },
            "readonly": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "concern": [
                    "input",
                    "textarea"
                ],
                "desc": "    Specifies that the element is read-only ",
                "note": ""
            },
            "required": {
                "browser": {
                    "chr": true,
                    "ie": 10,
                    "fx": 4,
                    "saf": true,
                    "op": true
                },
                "concern": [
                    "input",
                    "select",
                    "textarea"
                ],
                "desc": "    Specifies that the element must be filled out before submitting the form    ",
                "note": ""
            },
            "rows": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "concern": [
                    "textarea"
                ],
                "desc": "    Specifies the visible number of lines in a text area    ",
                "note": ""
            },
            "spellcheck": {
                "browser": {
                    "chr": true,
                    "ie": 11,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "concern": [
                    "Global Attributes"
                ],
                "desc": "    Specifies whether the element is to have its spelling and grammar checked or not    ",
                "note": ""
            },
            "wrap": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "concern": [
                    "textarea"
                ],
                "desc": "    Specifies how the text in a text area is to be wrapped when submitted in a form ",
                "note": ""
            }
        },
        "desc": "Defines a multiline input control (text area)",
        "type": "Forms and Input"
    },
    "button": {
        "browser": {
            "chr": true,
            "ie": true,
            "fx": true,
            "saf": true,
            "op": true
        },
        "attrs": {
            "autofocus": {
                "browser": {
                    "chr": 5,
                    "ie": 10,
                    "fx": 4,
                    "saf": 5,
                    "op": 9.6
                },
                "concern": [
                    "button",
                    "input",
                    "select",
                    "textarea"
                ],
                "desc": "    Specifies that the element should automatically get focus when the page loads   ",
                "note": ""
            },
            "disabled": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "desc": "    Specifies that the specified element/group of elements should be disabled   ",
                "note": "",
                "concern": [
                    "button",
                    "fieldset",
                    "input",
                    "optgroup",
                    "option",
                    "select",
                    "textarea"
                ]
            },
            "form": {
                "browser": {
                    "chr": 10,
                    "ie": 16,
                    "fx": 4,
                    "saf": 5.1,
                    "op": 9.5
                },
                "concern": [
                    "button",
                    "fieldset",
                    "input",
                    "label",
                    "meter",
                    "object",
                    "output",
                    "select",
                    "textarea"
                ],
                "desc": "    Specifies the name of the form the element belongs to   ",
                "note": ""
            },
            "formaction": {
                "browser": {
                    "chr": 9,
                    "ie": 10,
                    "fx": 4,
                    "saf": 5.1,
                    "op": 15
                },
                "concern": [
                    "button",
                    "input"
                ],
                "desc": "    Specifies where to send the form-data when a form is submitted. Only for type=\"submit\"  ",
                "note": ""
            },
            "formenctype": {
                "browser": {
                    "chr": 9,
                    "ie": 10,
                    "fx": 4,
                    "saf": 5.1,
                    "op": 11.5
                },
                "concern": [],
                "desc": "",
                "note": ""
            },
            "formmethod": {
                "browser": {
                    "chr": 9,
                    "ie": 10,
                    "fx": 4,
                    "saf": 5.1,
                    "op": 15
                },
                "concern": [],
                "desc": "",
                "note": ""
            },
            "formnovalidate": {
                "browser": {
                    "chr": 6,
                    "ie": 11,
                    "fx": 4,
                    "saf": true,
                    "op": true
                },
                "concern": [],
                "desc": "",
                "note": ""
            },
            "formtarget": {
                "browser": {
                    "chr": 9,
                    "ie": 10,
                    "fx": 4,
                    "saf": 5.1,
                    "op": 10.6
                },
                "concern": [],
                "desc": "",
                "note": ""
            },
            "name": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "concern": [
                    "button",
                    "fieldset",
                    "form",
                    "iframe",
                    "input",
                    "map",
                    "meta",
                    "object",
                    "output",
                    "param",
                    "select",
                    "textarea"
                ],
                "desc": "    Specifies the name of the element   ",
                "note": ""
            },
            "type": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "concern": [
                    "a",
                    "button",
                    "embed",
                    "input",
                    "link",
                    "menu",
                    "object",
                    "script",
                    "source",
                    "style"
                ],
                "desc": "    Specifies the type of element   ",
                "note": ""
            },
            "value": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "concern": [
                    "button",
                    "input",
                    "li",
                    "option",
                    "meter",
                    "progress",
                    "param"
                ],
                "desc": "    Specifies the value of the element  ",
                "note": ""
            }
        },
        "desc": "Defines a clickable button",
        "type": "Forms and Input"
    },
    "select": {
        "browser": {},
        "attrs": {},
        "desc": "Defines a drop-down list",
        "type": "Forms and Input"
    },
    "optgroup": {
        "browser": {},
        "attrs": {},
        "desc": "Defines a group of related options in a drop-down list",
        "type": "Forms and Input"
    },
    "option": {
        "browser": {},
        "attrs": {},
        "desc": "Defines an option in a drop-down list",
        "type": "Forms and Input"
    },
    "label": {
        "browser": {},
        "attrs": {},
        "desc": " Defines a label for an <input> element",
        "type": "Forms and Input"
    },
    "fieldset": {
        "browser": {},
        "attrs": {},
        "desc": "Groups related elements in a form",
        "type": "Forms and Input"
    },
    "legend": {
        "browser": {},
        "attrs": {},
        "desc": "Defines a caption for a <fieldset> element",
        "type": "Forms and Input"
    },
    "datalist": {
        "browser": {},
        "attrs": {},
        "desc": "Specifies a list of pre-defined options for input controls",
        "type": "Forms and Input"
    },
    "output": {
        "browser": {},
        "attrs": {},
        "desc": "Defines the result of a calculation",
        "type": "Forms and Input"
    },
    "frame": {
        "browser": {},
        "attrs": {},
        "note": "Not supported in HTML5",
        "desc": "Defines a window (a frame) in a frameset",
        "type": "Frames"
    },
    "frameset": {
        "browser": {},
        "attrs": {},
        "desc": "Defines a set of frames",
        "note": "Not supported in HTML5.",
        "type": "Frames"
    },
    "noframes": {
        "browser": {},
        "attrs": {},
        "desc": "Defines an alternate content for users that do not support frames",
        "note": "Not supported in HTML5.",
        "type": "Frames"
    },
    "iframe": {
        "browser": {},
        "attrs": {},
        "desc": "Defines an inline frame",
        "type": "Frames"
    },
    "img": {
        "browser": {},
        "attrs": {},
        "desc": " Defines an image",
        "type": "Images"
    },
    "map": {
        "browser": {},
        "attrs": {},
        "desc": " Defines a client-side image map",
        "type": "Images"
    },
    "area": {
        "browser": {
            "chr": true,
            "ie": true,
            "fx": true,
            "saf": true,
            "op": true
        },
        "attrs": {
            "alt": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "desc": "    Specifies an alternate text when the original element fails to display  ",
                "note": "",
                "concern": [
                    "area",
                    "img",
                    "input"
                ]
            },
            "coords": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "desc": "    Specifies the coordinates of the area   ",
                "note": "",
                "concern": [
                    "area"
                ]
            },
            "download": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "desc": "    Specifies that the target will be downloaded when a user clicks on the hyperlink    ",
                "note": "",
                "concern": [
                    "a",
                    "area"
                ]
            },
            "href": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "desc": "    Specifies the URL of the page the link goes to  ",
                "note": "",
                "concern": [
                    "a",
                    "area",
                    "base",
                    "link"
                ]
            },
            "hreflang": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "desc": "    Specifies the language of the linked document   ",
                "note": "",
                "concern": [
                    "a",
                    "area",
                    "link"
                ]
            },
            "media": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "desc": "    Specifies what media/device the linked document is optimized for    ",
                "note": "",
                "concern": [
                    "a",
                    "area",
                    "link",
                    "source",
                    "style"
                ]
            },
            "referrerpolicy": {
                "browser": {
                    "chr": 51,
                    "ie": 79,
                    "fx": 50,
                    "saf": 11.1,
                    "op": 38
                },
                "concern": [],
                "desc": "",
                "note": ""
            },
            "rel": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "desc": "    Specifies the relationship between the current document and the linked document ",
                "note": "",
                "concern": [
                    "a",
                    "area",
                    "form",
                    "link"
                ]
            },
            "shape": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "desc": "    Specifies the shape of the area ",
                "note": "",
                "concern": [
                    "area"
                ]
            },
            "target": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "desc": "    Specifies the target for where to open the linked document or where to submit the form  ",
                "note": "",
                "concern": [
                    "a",
                    "area",
                    "base",
                    "form"
                ]
            },
            "type": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "desc": "    Specifies the type of element   ",
                "note": "",
                "concern": [
                    "a",
                    "button",
                    "embed",
                    "input",
                    "link",
                    "menu",
                    "object",
                    "script",
                    "source",
                    "style"
                ]
            }
        },
        "desc": "Defines an area inside an image map",
        "type": "Images"
    },
    "canvas": {
        "browser": {
            "chr": 4,
            "ie": 9,
            "fx": 2,
            "saf": 3.1,
            "op": 9
        },
        "attrs": {},
        "desc": "Used to draw graphics, on the fly, via scripting (usually JavaScript)",
        "type": "Images",
        "height": {
            "browser": {
                "chr": 4,
                "ie": 9,
                "fx": 2,
                "saf": 3.1,
                "op": 9
            },
            "concern": {},
            "desc": "",
            "note": ""
        },
        "width": {
            "browser": {
                "chr": 4,
                "ie": 9,
                "fx": 2,
                "saf": 3.1,
                "op": 9
            },
            "concern": {},
            "desc": "",
            "note": ""
        }
    },
    "figcaption": {
        "browser": {},
        "attrs": {},
        "desc": "Defines a caption for a <figure> element",
        "type": "Images"
    },
    "figure": {
        "browser": {},
        "attrs": {},
        "desc": "Specifies self-contained content",
        "type": "Images"
    },
    "picture": {
        "browser": {},
        "attrs": {},
        "desc": " Defines a container for multiple image resources",
        "type": "Images"
    },
    "svg": {
        "browser": {
            "chr": 4,
            "ie": 9,
            "fx": 3,
            "saf": 3.2,
            "op": 10.1
        },
        "attrs": {},
        "desc": " Defines a container for SVG graphics",
        "type": "Images"
    },
    "audio": {
        "browser": {
            "chr": 4,
            "ie": 9,
            "fx": 3.5,
            "saf": 4,
            "op": 11.5
        },
        "attrs": {},
        "desc": " Defines sound content",
        "type": "Audio / Video",
        "autoplay": {
            "browser": {
                "chr": 4,
                "ie": 9,
                "fx": 3.5,
                "saf": 4,
                "op": 11.5
            },
            "concern": {},
            "desc": "",
            "note": ""
        },
        "conspanols": {
            "browser": {
                "chr": 4,
                "ie": 9,
                "fx": 3.5,
                "saf": 4,
                "op": 11.5
            },
            "concern": {},
            "desc": "",
            "note": ""
        },
        "loop": {
            "browser": {
                "chr": 4,
                "ie": 9,
                "fx": 3.5,
                "saf": 4,
                "op": 11.5
            },
            "concern": {},
            "desc": "",
            "note": ""
        },
        "muted": {
            "browser": {
                "chr": 4,
                "ie": 10,
                "fx": 11,
                "saf": 7.1,
                "op": 11.5
            },
            "concern": {},
            "desc": "",
            "note": ""
        },
        "preload": {
            "browser": {
                "chr": 4,
                "ie": 9,
                "fx": 4,
                "saf": 4,
                "op": 11.5
            },
            "concern": {},
            "desc": "",
            "note": ""
        },
        "src": {
            "browser": {
                "chr": 4,
                "ie": 9,
                "fx": 3.5,
                "saf": 4,
                "op": 11.5
            },
            "concern": {},
            "desc": "",
            "note": ""
        }
    },
    "source": {
        "browser": {},
        "attrs": {},
        "desc": "Defines multiple media resources for media elements (<video>, <audio> and <picture>)",
        "type": "Audio / Video"
    },
    "track": {
        "browser": {},
        "attrs": {},
        "desc": " Defines text tracks for media elements (<video> and <audio>)",
        "type": "Audio / Video"
    },
    "video": {
        "browser": {
            "chr": 4,
            "ie": 9,
            "fx": 3.5,
            "saf": 3.1,
            "op": 11.5
        },
        "attrs": {
            "autoplay": {
                "browser": {
                    "chr": 4,
                    "ie": 9,
                    "fx": 3.5,
                    "saf": 3.1,
                    "op": 11.5
                },
                "concern": [
                    "audio",
                    "video"
                ],
                "desc": "    Specifies that the audio/video will start playing as soon as it is ready    ",
                "note": ""
            },
            "conspanols": {
                "browser": {
                    "chr": 4,
                    "ie": 9,
                    "fx": 3.5,
                    "saf": 3.1,
                    "op": 11.5
                },
                "concern": [],
                "desc": "",
                "note": ""
            },
            "height": {
                "browser": {
                    "chr": 4,
                    "ie": 9,
                    "fx": 3.5,
                    "saf": 3.1,
                    "op": 11.5
                },
                "concern": [
                    "canvas",
                    "embed",
                    "iframe",
                    "img",
                    "input",
                    "object",
                    "video"
                ],
                "desc": "    Specifies the height of the element ",
                "note": ""
            },
            "loop": {
                "browser": {
                    "chr": 4,
                    "ie": 9,
                    "fx": 11,
                    "saf": 3.1,
                    "op": 11.5
                },
                "concern": [
                    "audio",
                    "video"
                ],
                "desc": "    Specifies that the audio/video will start over again, every time it is finished ",
                "note": ""
            },
            "muted": {
                "browser": {
                    "chr": 30,
                    "ie": 10,
                    "fx": 11,
                    "saf": 5,
                    "op": true
                },
                "concern": [
                    "video",
                    "audio"
                ],
                "desc": "    Specifies that the audio output of the video should be muted    ",
                "note": ""
            },
            "poster": {
                "browser": {
                    "chr": 4,
                    "ie": 9,
                    "fx": 3.6,
                    "saf": 3.1,
                    "op": 10.5
                },
                "concern": [
                    "video"
                ],
                "desc": "    Specifies an image to be shown while the video is downloading, or until the user hits the play button   ",
                "note": ""
            },
            "preload": {
                "browser": {
                    "chr": 4,
                    "ie": 9,
                    "fx": 4,
                    "saf": 3.1,
                    "op": 10.5
                },
                "concern": [
                    "audio",
                    "video"
                ],
                "desc": "    Specifies if and how the author thinks the audio/video should be loaded when the page loads ",
                "note": ""
            },
            "src": {
                "browser": {
                    "chr": 4,
                    "ie": 9,
                    "fx": 3.5,
                    "saf": 3.1,
                    "op": 11.5
                },
                "concern": [
                    "audio",
                    "embed",
                    "iframe",
                    "img",
                    "input",
                    "script",
                    "source",
                    "track",
                    "video"
                ],
                "desc": "    Specifies the URL of the media file ",
                "note": ""
            },
            "width": {
                "browser": {
                    "chr": 4,
                    "ie": 9,
                    "fx": 3.5,
                    "saf": 3.1,
                    "op": 11.5
                },
                "concern": [
                    "canvas",
                    "embed",
                    "iframe",
                    "img",
                    "input",
                    "object",
                    "video"
                ],
                "desc": "    Specifies the width of the element  ",
                "note": ""
            }
        },
        "desc": " Defines a video or movie",
        "type": "Audio / Video"
    },
    "a": {
        "browser": {
            "chr": true,
            "ie": true,
            "fx": true,
            "saf": true,
            "op": true
        },
        "attrs": {
            "download": {
                "browser": {
                    "chr": 14,
                    "ie": 18,
                    "fx": 20,
                    "saf": 10.1,
                    "op": 15
                },
                "concern": [
                    "a",
                    "area"
                ],
                "desc": "    Specifies that the target will be downloaded when a user clicks on the hyperlink    ",
                "note": ""
            },
            "href": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "desc": "    Specifies the URL of the page the link goes to  ",
                "note": "",
                "concern": [
                    "a",
                    "area",
                    "base",
                    "link"
                ]
            },
            "hreflang": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "desc": "    Specifies the language of the linked document   ",
                "note": "",
                "concern": [
                    "a",
                    "area",
                    "link"
                ]
            },
            "media": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "desc": "    Specifies what media/device the linked document is optimized for    ",
                "note": "",
                "concern": [
                    "a",
                    "area",
                    "link",
                    "source",
                    "style"
                ]
            },
            "ping": {
                "browser": {
                    "chr": true,
                    "ie": false,
                    "fx": true,
                    "saf": false,
                    "op": true
                },
                "desc": "",
                "note": "",
                "concern": []
            },
            "referrerpolicy": {
                "browser": {
                    "chr": 51,
                    "ie": 79,
                    "fx": 50,
                    "saf": 11.1,
                    "op": 38
                },
                "concern": [],
                "desc": "",
                "note": ""
            },
            "rel": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "desc": "    Specifies the relationship between the current document and the linked document ",
                "note": "",
                "concern": [
                    "a",
                    "area",
                    "form",
                    "link"
                ]
            },
            "target": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "desc": "    Specifies the target for where to open the linked document or where to submit the form  ",
                "note": "",
                "concern": [
                    "a",
                    "area",
                    "base",
                    "form"
                ]
            },
            "type": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "desc": "    Specifies the type of element   ",
                "note": "",
                "concern": [
                    "a",
                    "button",
                    "embed",
                    "input",
                    "link",
                    "menu",
                    "object",
                    "script",
                    "source",
                    "style"
                ]
            }
        },
        "desc": " Defines a hyperlink",
        "type": "Links"
    },
    "link": {
        "browser": {},
        "attrs": {},
        "desc": "Defines the relationship between a document and an external resource (most used to link to style sheets)",
        "type": "Links"
    },
    "nav": {
        "browser": {},
        "attrs": {},
        "desc": " Defines navigation links",
        "type": "Links"
    },
    "ul": {
        "browser": {
            "chr": true,
            "ie": true,
            "fx": true,
            "saf": true,
            "op": true
        },
        "attrs": {},
        "desc": "Defines an unordered list",
        "type": "Lists"
    },
    "ol": {
        "browser": {},
        "attrs": {},
        "desc": "Defines an ordered list",
        "type": "Lists"
    },
    "li": {
        "browser": {},
        "attrs": {},
        "desc": "Defines a list item",
        "type": "Lists"
    },
    "dir": {
        "browser": {},
        "attrs": {},
        "desc": "Defines a directory list",
        "note": " Not supported in HTML5. Use <ul> instead.",
        "type": "Lists"
    },
    "dl": {
        "browser": {},
        "attrs": {},
        "desc": "Defines a description list",
        "type": "Lists"
    },
    "dt": {
        "browser": {},
        "attrs": {},
        "desc": "Defines a term/name in a description list",
        "type": "Lists"
    },
    "dd": {
        "browser": {},
        "attrs": {},
        "desc": "Defines a description of a term/name in a description list",
        "type": "Lists"
    },
    "table": {
        "browser": {
            "chr": true,
            "ie": true,
            "fx": true,
            "saf": true,
            "op": true
        },
        "attrs": {},
        "desc": " Defines a table",
        "type": "Tables"
    },
    "caption": {
        "browser": {
            "chr": true,
            "ie": true,
            "fx": true,
            "saf": true,
            "op": true
        },
        "attrs": {},
        "desc": " Defines a table caption",
        "type": "Tables",
        "cite": {
            "browser": {
                "chr": true,
                "ie": true,
                "fx": true,
                "saf": true,
                "op": true
            },
            "attrs": {}
        },
        "code": {
            "browser": {
                "chr": true,
                "ie": true,
                "fx": true,
                "saf": true,
                "op": true
            },
            "attrs": {},
            "col": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "attrs": {
                    "span": {
                        "browser": {
                            "chr": true,
                            "ie": true,
                            "fx": true,
                            "saf": true,
                            "op": true
                        },
                        "concern": {},
                        "desc": "",
                        "note": ""
                    }
                }
            },
            "colgroup": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "attrs": {
                    "span": {
                        "browser": {
                            "chr": true,
                            "ie": true,
                            "fx": true,
                            "saf": true,
                            "op": true
                        },
                        "concern": {},
                        "desc": "",
                        "note": ""
                    }
                }
            },
            "data": {
                "browser": {
                    "chr": 62,
                    "ie": 13,
                    "fx": 22,
                    "saf": false,
                    "op": 49
                },
                "attrs": {
                    "value": {
                        "browser": {
                            "chr": 62,
                            "ie": 13,
                            "fx": 22,
                            "saf": false,
                            "op": 49
                        },
                        "concern": {},
                        "desc": "",
                        "note": ""
                    }
                }
            },
            "datalist": {
                "browser": {
                    "chr": 20,
                    "ie": 10,
                    "fx": 4,
                    "saf": 12.1,
                    "op": 9.5
                },
                "attrs": {}
            },
            "dd": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "attrs": {},
                "del": {
                    "browser": {
                        "chr": true,
                        "ie": true,
                        "fx": true,
                        "saf": true,
                        "op": true
                    },
                    "attrs": {
                        "cite": {
                            "browser": {
                                "chr": true,
                                "ie": true,
                                "fx": true,
                                "saf": true,
                                "op": true
                            },
                            "concern": {},
                            "desc": "",
                            "note": ""
                        },
                        "datetime": {
                            "browser": {
                                "chr": true,
                                "ie": true,
                                "fx": true,
                                "saf": true,
                                "op": true
                            },
                            "concern": {},
                            "desc": "",
                            "note": ""
                        }
                    }
                },
                "details": {
                    "browser": {
                        "chr": 12,
                        "ie": 79,
                        "fx": 49,
                        "saf": 6,
                        "op": 15
                    },
                    "attrs": {},
                    "open": {
                        "browser": {
                            "chr": 12,
                            "ie": 79,
                            "fx": 49,
                            "saf": 6,
                            "op": 15
                        },
                        "concern": {},
                        "desc": "",
                        "note": ""
                    }
                }
            },
            "dfn": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "attrs": {},
                "dialog": {
                    "browser": {
                        "chr": 37,
                        "ie": 79,
                        "fx": 53,
                        "saf": false,
                        "op": 24
                    },
                    "attrs": {},
                    "open": {
                        "browser": {
                            "chr": 37,
                            "ie": 79,
                            "fx": 53,
                            "saf": false,
                            "op": 24
                        },
                        "concern": {},
                        "desc": "",
                        "note": ""
                    }
                }
            },
            "div": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "attrs": {},
                "dl": {
                    "browser": {
                        "chr": true,
                        "ie": true,
                        "fx": true,
                        "saf": true,
                        "op": true
                    },
                    "attrs": {},
                    "dt": {
                        "browser": {
                            "chr": true,
                            "ie": true,
                            "fx": true,
                            "saf": true,
                            "op": true
                        },
                        "attrs": {},
                        "em": {
                            "browser": {
                                "chr": true,
                                "ie": true,
                                "fx": true,
                                "saf": true,
                                "op": true
                            },
                            "attrs": {},
                            "embed": {
                                "browser": {
                                    "chr": true,
                                    "ie": true,
                                    "fx": true,
                                    "saf": true,
                                    "op": true
                                },
                                "attrs": {
                                    "height": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "src": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "type": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "width": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    }
                                }
                            },
                            "fieldset": {
                                "browser": {
                                    "chr": true,
                                    "ie": true,
                                    "fx": true,
                                    "saf": true,
                                    "op": true
                                },
                                "attrs": {
                                    "disabled": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": 6,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "form": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "name": {
                                        "browser": {
                                            "chr": true,
                                            "ie": 11,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    }
                                }
                            },
                            "figcaption": {
                                "browser": {
                                    "chr": 8,
                                    "ie": 9,
                                    "fx": 4,
                                    "saf": 5.1,
                                    "op": 11
                                },
                                "attrs": {}
                            }
                        },
                        "figure": {
                            "browser": {
                                "chr": 8,
                                "ie": 9,
                                "fx": 4,
                                "saf": 5.1,
                                "op": 11
                            },
                            "attrs": {}
                        }
                    },
                    "footer": {
                        "browser": {
                            "chr": 5,
                            "ie": 9,
                            "fx": 4,
                            "saf": 5,
                            "op": 11.1
                        },
                        "attrs": {}
                    }
                },
                "form": {
                    "browser": {
                        "chr": true,
                        "ie": true,
                        "fx": true,
                        "saf": true,
                        "op": true
                    },
                    "attrs": {
                        "accept-charset": {
                            "browser": {
                                "chr": true,
                                "ie": true,
                                "fx": true,
                                "saf": true,
                                "op": true
                            },
                            "concern": {},
                            "desc": "",
                            "note": ""
                        },
                        "action": {
                            "browser": {
                                "chr": true,
                                "ie": true,
                                "fx": true,
                                "saf": true,
                                "op": true
                            },
                            "concern": {},
                            "desc": "",
                            "note": ""
                        },
                        "autocomplete": {
                            "browser": {
                                "chr": true,
                                "ie": true,
                                "fx": 4,
                                "saf": 5.2,
                                "op": 15
                            },
                            "concern": {},
                            "desc": "",
                            "note": ""
                        },
                        "enctype": {
                            "browser": {
                                "chr": true,
                                "ie": true,
                                "fx": true,
                                "saf": true,
                                "op": true
                            },
                            "concern": {},
                            "desc": "",
                            "note": ""
                        },
                        "method": {
                            "browser": {
                                "chr": true,
                                "ie": true,
                                "fx": true,
                                "saf": true,
                                "op": true
                            },
                            "concern": {},
                            "desc": "",
                            "note": ""
                        },
                        "name": {
                            "browser": {
                                "chr": true,
                                "ie": true,
                                "fx": true,
                                "saf": true,
                                "op": true
                            },
                            "concern": {},
                            "desc": "",
                            "note": ""
                        },
                        "novalidate": {
                            "browser": {
                                "chr": true,
                                "ie": 10,
                                "fx": 4,
                                "saf": 10.1,
                                "op": 15
                            },
                            "concern": {},
                            "desc": "",
                            "note": ""
                        },
                        "rel": {
                            "browser": {
                                "chr": true,
                                "ie": true,
                                "fx": true,
                                "saf": true,
                                "op": true
                            },
                            "concern": {},
                            "desc": "",
                            "note": ""
                        },
                        "target": {
                            "browser": {
                                "chr": true,
                                "ie": true,
                                "fx": true,
                                "saf": true,
                                "op": true
                            },
                            "concern": {},
                            "desc": "",
                            "note": ""
                        }
                    }
                },
                "h6": {
                    "browser": {
                        "chr": true,
                        "ie": true,
                        "fx": true,
                        "saf": true,
                        "op": true
                    },
                    "attrs": {},
                    "head": {
                        "browser": {
                            "chr": true,
                            "ie": true,
                            "fx": true,
                            "saf": true,
                            "op": true
                        },
                        "attrs": {},
                        "header": {
                            "browser": {
                                "chr": "5.0 and +",
                                "ie": 9,
                                "fx": 4,
                                "saf": 5,
                                "op": 11.1
                            },
                            "attrs": {}
                        }
                    },
                    "hr": {
                        "browser": {
                            "chr": true,
                            "ie": true,
                            "fx": true,
                            "saf": true,
                            "op": true
                        },
                        "attrs": {},
                        "html": {
                            "browser": {
                                "chr": true,
                                "ie": true,
                                "fx": true,
                                "saf": true,
                                "op": true
                            },
                            "attrs": {
                                "xmlns": {
                                    "browser": {
                                        "chr": true,
                                        "ie": true,
                                        "fx": true,
                                        "saf": true,
                                        "op": true
                                    },
                                    "concern": {},
                                    "desc": "",
                                    "note": ""
                                }
                            }
                        },
                        "i": {
                            "browser": {
                                "chr": true,
                                "ie": true,
                                "fx": true,
                                "saf": true,
                                "op": true
                            },
                            "attrs": {},
                            "iframe": {
                                "browser": {
                                    "chr": true,
                                    "ie": true,
                                    "fx": true,
                                    "saf": true,
                                    "op": true
                                },
                                "attrs": {
                                    "allow": {
                                        "browser": {
                                            "chr": 60,
                                            "ie": 79,
                                            "fx": 74,
                                            "saf": 11.1,
                                            "op": 47
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "allowfullscreen": {
                                        "browser": {
                                            "chr": 27,
                                            "ie": "11.0 - ms - ",
                                            "fx": 18,
                                            "saf": 7,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "allowpaymenspanequest": {
                                        "browser": {
                                            "chr": false,
                                            "ie": false,
                                            "fx": false,
                                            "saf": false,
                                            "op": false
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "height": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "name": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "referrerpolicy": {
                                        "browser": {
                                            "chr": 51,
                                            "ie": 79,
                                            "fx": 50,
                                            "saf": 11.1,
                                            "op": 38
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "sandbox": {
                                        "browser": {
                                            "chr": 4,
                                            "ie": 10,
                                            "fx": 17,
                                            "saf": 5,
                                            "op": 15
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "src": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "srcdoc": {
                                        "browser": {
                                            "chr": 20,
                                            "ie": 79,
                                            "fx": 25,
                                            "saf": 6,
                                            "op": 15
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "width": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    }
                                }
                            },
                            "img": {
                                "browser": {
                                    "chr": true,
                                    "ie": true,
                                    "fx": true,
                                    "saf": true,
                                    "op": true
                                },
                                "attrs": {
                                    "alt": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "crossorigin": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "height": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "ismap": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "loading": {
                                        "browser": {
                                            "chr": 77,
                                            "ie": 79,
                                            "fx": 75,
                                            "saf": false,
                                            "op": 64
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "longdesc": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "referrerpolicy": {
                                        "browser": {
                                            "chr": 51,
                                            "ie": 79,
                                            "fx": 50,
                                            "saf": 11.1,
                                            "op": 38
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "sizes": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "src": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "srcset": {
                                        "browser": {
                                            "chr": 34,
                                            "ie": "?",
                                            "fx": 38,
                                            "saf": 8,
                                            "op": 21
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "usemap": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "width": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    }
                                }
                            },
                            "input": {
                                "browser": {
                                    "chr": true,
                                    "ie": true,
                                    "fx": true,
                                    "saf": true,
                                    "op": true
                                },
                                "attrs": {
                                    "accept": {
                                        "browser": {
                                            "chr": 26,
                                            "ie": 10,
                                            "fx": 37,
                                            "saf": 11.1,
                                            "op": 15
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "alt": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "autocomplete": {
                                        "browser": {
                                            "chr": 17,
                                            "ie": 6,
                                            "fx": 2,
                                            "saf": 5.1,
                                            "op": 10
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "autofocus": {
                                        "browser": {
                                            "chr": 5,
                                            "ie": 11,
                                            "fx": 4,
                                            "saf": 5,
                                            "op": 9.6
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "checked": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "dirname": {
                                        "browser": {
                                            "chr": true,
                                            "ie": 79,
                                            "fx": false,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "disabled": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "form": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": 5.1,
                                            "op": 10.6
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "formaction": {
                                        "browser": {
                                            "chr": true,
                                            "ie": 10,
                                            "fx": true,
                                            "saf": 5.1,
                                            "op": 10.6
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "formenctype": {
                                        "browser": {
                                            "chr": true,
                                            "ie": 10,
                                            "fx": true,
                                            "saf": 5.1,
                                            "op": 10.6
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "formmethod": {
                                        "browser": {
                                            "chr": true,
                                            "ie": 10,
                                            "fx": true,
                                            "saf": 5.1,
                                            "op": 10.6
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "formnovalidate": {
                                        "browser": {
                                            "chr": true,
                                            "ie": 10,
                                            "fx": true,
                                            "saf": 10.1,
                                            "op": 10.6
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "formtarget": {
                                        "browser": {
                                            "chr": true,
                                            "ie": 10,
                                            "fx": true,
                                            "saf": 5.1,
                                            "op": 10.6
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "height": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": 16,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "list": {
                                        "browser": {
                                            "chr": 20,
                                            "ie": 10,
                                            "fx": 4,
                                            "saf": false,
                                            "op": 9.6
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "max": {
                                        "browser": {
                                            "chr": 5,
                                            "ie": 10,
                                            "fx": 16,
                                            "saf": 5.1,
                                            "op": 10.6
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "maxlength": {
                                        "browser": {
                                            "chr": 4,
                                            "ie": 10,
                                            "fx": 4,
                                            "saf": 5.1,
                                            "op": 15
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "min": {
                                        "browser": {
                                            "chr": 5,
                                            "ie": 10,
                                            "fx": 16,
                                            "saf": 5.1,
                                            "op": 10.6
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "minlength": {
                                        "browser": {
                                            "chr": 40,
                                            "ie": 17,
                                            "fx": 51,
                                            "saf": 10.1,
                                            "op": 27
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "multiple": {
                                        "browser": {
                                            "chr": 6,
                                            "ie": 10,
                                            "fx": 3.6,
                                            "saf": 5,
                                            "op": 11
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "name": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "pattern": {
                                        "browser": {
                                            "chr": 5,
                                            "ie": 10,
                                            "fx": 4,
                                            "saf": 10.1,
                                            "op": 9.6
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "placeholder": {
                                        "browser": {
                                            "chr": 10,
                                            "ie": 10,
                                            "fx": 4,
                                            "saf": 5,
                                            "op": 11
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "readonly": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "required": {
                                        "browser": {
                                            "chr": 5,
                                            "ie": 10,
                                            "fx": 4,
                                            "saf": 10.1,
                                            "op": 9.6
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "size": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "src": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "step": {
                                        "browser": {
                                            "chr": 6,
                                            "ie": 10,
                                            "fx": 16,
                                            "saf": 5,
                                            "op": 10.6
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "type": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "value": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "width": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": 16,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    }
                                }
                            },
                            "ins": {
                                "browser": {
                                    "chr": true,
                                    "ie": true,
                                    "fx": true,
                                    "saf": true,
                                    "op": true
                                },
                                "attrs": {
                                    "cite": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "datetime": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    }
                                }
                            },
                            "kbd": {
                                "browser": {
                                    "chr": true,
                                    "ie": true,
                                    "fx": true,
                                    "saf": true,
                                    "op": true
                                },
                                "attrs": {},
                                "label": {
                                    "browser": {
                                        "chr": true,
                                        "ie": true,
                                        "fx": true,
                                        "saf": true,
                                        "op": true
                                    },
                                    "attrs": {
                                        "for": {
                                            "browser": {
                                                "chr": true,
                                                "ie": true,
                                                "fx": true,
                                                "saf": true,
                                                "op": true
                                            },
                                            "concern": {},
                                            "desc": "",
                                            "note": ""
                                        },
                                        "form": {
                                            "browser": {
                                                "chr": true,
                                                "ie": true,
                                                "fx": true,
                                                "saf": true,
                                                "op": true
                                            },
                                            "concern": {},
                                            "desc": "",
                                            "note": ""
                                        }
                                    }
                                },
                                "legend": {
                                    "browser": {
                                        "chr": true,
                                        "ie": true,
                                        "fx": true,
                                        "saf": true,
                                        "op": true
                                    },
                                    "attrs": {},
                                    "li": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "attrs": {
                                            "value": {
                                                "browser": {
                                                    "chr": true,
                                                    "ie": true,
                                                    "fx": true,
                                                    "saf": true,
                                                    "op": true
                                                },
                                                "concern": {},
                                                "desc": "",
                                                "note": ""
                                            }
                                        }
                                    },
                                    "link": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "attrs": {
                                            "crossorigin": {
                                                "browser": {
                                                    "chr": 25,
                                                    "ie": 79,
                                                    "fx": 18,
                                                    "saf": "?",
                                                    "op": 15
                                                },
                                                "concern": {},
                                                "desc": "",
                                                "note": ""
                                            },
                                            "href": {
                                                "browser": {
                                                    "chr": true,
                                                    "ie": true,
                                                    "fx": true,
                                                    "saf": true,
                                                    "op": true
                                                },
                                                "concern": {},
                                                "desc": "",
                                                "note": ""
                                            },
                                            "hreflang": {
                                                "browser": {
                                                    "chr": true,
                                                    "ie": true,
                                                    "fx": true,
                                                    "saf": true,
                                                    "op": true
                                                },
                                                "concern": {},
                                                "desc": "",
                                                "note": ""
                                            },
                                            "media": {
                                                "browser": {
                                                    "chr": true,
                                                    "ie": true,
                                                    "fx": true,
                                                    "saf": true,
                                                    "op": true
                                                },
                                                "concern": {},
                                                "desc": "",
                                                "note": ""
                                            },
                                            "referrerpolicy": {
                                                "browser": {
                                                    "chr": 51,
                                                    "ie": 79,
                                                    "fx": 50,
                                                    "saf": 11.1,
                                                    "op": 38
                                                },
                                                "concern": {},
                                                "desc": "",
                                                "note": ""
                                            },
                                            "rel": {
                                                "browser": {
                                                    "chr": true,
                                                    "ie": true,
                                                    "fx": true,
                                                    "saf": true,
                                                    "op": true
                                                },
                                                "concern": {},
                                                "desc": "",
                                                "note": ""
                                            },
                                            "sizes": {
                                                "browser": {
                                                    "chr": false,
                                                    "ie": false,
                                                    "fx": false,
                                                    "saf": false,
                                                    "op": false
                                                },
                                                "concern": {},
                                                "desc": "",
                                                "note": ""
                                            },
                                            "title": {
                                                "browser": {
                                                    "chr": true,
                                                    "ie": true,
                                                    "fx": true,
                                                    "saf": true,
                                                    "op": true
                                                },
                                                "concern": {},
                                                "desc": "",
                                                "note": ""
                                            },
                                            "type": {
                                                "browser": {
                                                    "chr": true,
                                                    "ie": true,
                                                    "fx": true,
                                                    "saf": true,
                                                    "op": true
                                                },
                                                "concern": {},
                                                "desc": "",
                                                "note": ""
                                            }
                                        }
                                    },
                                    "main": {
                                        "browser": {
                                            "chr": 26,
                                            "ie": 12,
                                            "fx": 21,
                                            "saf": 7,
                                            "op": 16
                                        },
                                        "attrs": {}
                                    }
                                },
                                "map": {
                                    "browser": {
                                        "chr": true,
                                        "ie": true,
                                        "fx": true,
                                        "saf": true,
                                        "op": true
                                    },
                                    "attrs": {
                                        "name": {
                                            "browser": {
                                                "chr": true,
                                                "ie": true,
                                                "fx": true,
                                                "saf": true,
                                                "op": true
                                            },
                                            "concern": {},
                                            "desc": "",
                                            "note": ""
                                        }
                                    }
                                },
                                "mark": {
                                    "browser": {
                                        "chr": 6,
                                        "ie": 9,
                                        "fx": 4,
                                        "saf": 5,
                                        "op": 11.1
                                    },
                                    "attrs": {}
                                }
                            },
                            "meta": {
                                "browser": {
                                    "chr": true,
                                    "ie": true,
                                    "fx": true,
                                    "saf": true,
                                    "op": true
                                },
                                "attrs": {
                                    "charset": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "content": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "http_equiv": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    },
                                    "name": {
                                        "browser": {
                                            "chr": true,
                                            "ie": true,
                                            "fx": true,
                                            "saf": true,
                                            "op": true
                                        },
                                        "concern": {},
                                        "desc": "",
                                        "note": ""
                                    }
                                }
                            },
                            "meter": {
                                "browser": {
                                    "chr": 8,
                                    "ie": 13,
                                    "fx": 16,
                                    "saf": 6,
                                    "op": 11.5
                                },
                                "attrs": {},
                                "form": {
                                    "browser": {
                                        "chr": false,
                                        "ie": false,
                                        "fx": false,
                                        "saf": false,
                                        "op": false
                                    },
                                    "concern": {},
                                    "desc": "",
                                    "note": ""
                                },
                                "high": {
                                    "browser": {
                                        "chr": 8,
                                        "ie": 13,
                                        "fx": 16,
                                        "saf": 6,
                                        "op": 11.5
                                    },
                                    "concern": {},
                                    "desc": "",
                                    "note": ""
                                },
                                "low": {
                                    "browser": {
                                        "chr": 8,
                                        "ie": 13,
                                        "fx": 16,
                                        "saf": 6,
                                        "op": 11.5
                                    },
                                    "concern": {},
                                    "desc": "",
                                    "note": ""
                                },
                                "max": {
                                    "browser": {
                                        "chr": 8,
                                        "ie": 13,
                                        "fx": 16,
                                        "saf": 6,
                                        "op": 11.5
                                    },
                                    "concern": {},
                                    "desc": "",
                                    "note": ""
                                },
                                "min": {
                                    "browser": {
                                        "chr": 8,
                                        "ie": 13,
                                        "fx": 16,
                                        "saf": 6,
                                        "op": 11.5
                                    },
                                    "concern": {},
                                    "desc": "",
                                    "note": ""
                                },
                                "optimum": {
                                    "browser": {
                                        "chr": 8,
                                        "ie": 13,
                                        "fx": 16,
                                        "saf": 6,
                                        "op": 11.5
                                    },
                                    "concern": {},
                                    "desc": "",
                                    "note": ""
                                },
                                "value": {
                                    "browser": {
                                        "chr": 8,
                                        "ie": 13,
                                        "fx": 16,
                                        "saf": 6,
                                        "op": 11.5
                                    },
                                    "concern": {},
                                    "desc": "",
                                    "note": ""
                                }
                            }
                        },
                        "nav": {
                            "browser": {
                                "chr": 5,
                                "ie": 9,
                                "fx": 4,
                                "saf": 5,
                                "op": 11.1
                            },
                            "attrs": {}
                        }
                    },
                    "noscript": {
                        "browser": {
                            "chr": true,
                            "ie": true,
                            "fx": true,
                            "saf": true,
                            "op": true
                        },
                        "attrs": {},
                        "object": {
                            "browser": {
                                "chr": true,
                                "ie": true,
                                "fx": true,
                                "saf": true,
                                "op": true
                            },
                            "attrs": {
                                "data": {
                                    "browser": {
                                        "chr": true,
                                        "ie": true,
                                        "fx": true,
                                        "saf": true,
                                        "op": true
                                    },
                                    "concern": {},
                                    "desc": "",
                                    "note": ""
                                },
                                "form": {
                                    "browser": {
                                        "chr": false,
                                        "ie": false,
                                        "fx": false,
                                        "saf": false,
                                        "op": false
                                    },
                                    "concern": {},
                                    "desc": "",
                                    "note": ""
                                },
                                "height": {
                                    "browser": {
                                        "chr": true,
                                        "ie": true,
                                        "fx": true,
                                        "saf": true,
                                        "op": true
                                    },
                                    "concern": {},
                                    "desc": "",
                                    "note": ""
                                },
                                "name": {
                                    "browser": {
                                        "chr": true,
                                        "ie": true,
                                        "fx": true,
                                        "saf": true,
                                        "op": true
                                    },
                                    "concern": {},
                                    "desc": "",
                                    "note": ""
                                },
                                "type": {
                                    "browser": {
                                        "chr": true,
                                        "ie": true,
                                        "fx": true,
                                        "saf": true,
                                        "op": true
                                    },
                                    "concern": {},
                                    "desc": "",
                                    "note": ""
                                },
                                "usemap": {
                                    "browser": {
                                        "chr": false,
                                        "ie": false,
                                        "fx": true,
                                        "saf": false,
                                        "op": false
                                    },
                                    "concern": {},
                                    "desc": "",
                                    "note": ""
                                },
                                "width": {
                                    "browser": {
                                        "chr": true,
                                        "ie": true,
                                        "fx": true,
                                        "saf": true,
                                        "op": true
                                    },
                                    "concern": {},
                                    "desc": "",
                                    "note": ""
                                }
                            }
                        },
                        "ol": {
                            "browser": {
                                "chr": true,
                                "ie": true,
                                "fx": true,
                                "saf": true,
                                "op": true
                            },
                            "attrs": {
                                "reversed": {
                                    "browser": {
                                        "chr": 18,
                                        "ie": 79,
                                        "fx": 18,
                                        "saf": 6,
                                        "op": 12.1
                                    },
                                    "concern": {},
                                    "desc": "",
                                    "note": ""
                                },
                                "start": {
                                    "browser": {
                                        "chr": true,
                                        "ie": true,
                                        "fx": true,
                                        "saf": true,
                                        "op": true
                                    },
                                    "concern": {},
                                    "desc": "",
                                    "note": ""
                                },
                                "type": {
                                    "browser": {
                                        "chr": true,
                                        "ie": true,
                                        "fx": true,
                                        "saf": true,
                                        "op": true
                                    },
                                    "concern": {},
                                    "desc": "",
                                    "note": ""
                                }
                            }
                        },
                        "optgroup": {
                            "browser": {
                                "chr": true,
                                "ie": true,
                                "fx": true,
                                "saf": true,
                                "op": true
                            },
                            "attrs": {
                                "disabled": {
                                    "browser": {
                                        "chr": true,
                                        "ie": 8,
                                        "fx": true,
                                        "saf": true,
                                        "op": true
                                    },
                                    "concern": {},
                                    "desc": "",
                                    "note": ""
                                },
                                "label": {
                                    "browser": {
                                        "chr": true,
                                        "ie": true,
                                        "fx": true,
                                        "saf": true,
                                        "op": true
                                    },
                                    "concern": {},
                                    "desc": "",
                                    "note": ""
                                }
                            }
                        },
                        "option": {
                            "browser": {
                                "chr": true,
                                "ie": true,
                                "fx": true,
                                "saf": true,
                                "op": true
                            },
                            "attrs": {
                                "disabled": {
                                    "browser": {
                                        "chr": true,
                                        "ie": 8,
                                        "fx": true,
                                        "saf": true,
                                        "op": true
                                    },
                                    "concern": {},
                                    "desc": "",
                                    "note": ""
                                },
                                "label": {
                                    "browser": {
                                        "chr": true,
                                        "ie": 8,
                                        "fx": false,
                                        "saf": true,
                                        "op": true
                                    },
                                    "concern": {},
                                    "desc": "",
                                    "note": ""
                                },
                                "selected": {
                                    "browser": {
                                        "chr": true,
                                        "ie": true,
                                        "fx": true,
                                        "saf": true,
                                        "op": true
                                    },
                                    "concern": {},
                                    "desc": "",
                                    "note": ""
                                },
                                "value": {
                                    "browser": {
                                        "chr": true,
                                        "ie": true,
                                        "fx": true,
                                        "saf": true,
                                        "op": true
                                    },
                                    "concern": {},
                                    "desc": "",
                                    "note": ""
                                }
                            }
                        },
                        "output": {
                            "browser": {
                                "chr": 10,
                                "ie": 13,
                                "fx": 4,
                                "saf": 5.1,
                                "op": 11
                            },
                            "attrs": {},
                            "for": {
                                "browser": {
                                    "chr": 10,
                                    "ie": 13,
                                    "fx": 4,
                                    "saf": 7,
                                    "op": 11.5
                                },
                                "concern": {},
                                "desc": "",
                                "note": ""
                            },
                            "form": {
                                "browser": {
                                    "chr": false,
                                    "ie": false,
                                    "fx": false,
                                    "saf": false,
                                    "op": false
                                },
                                "concern": {},
                                "desc": "",
                                "note": ""
                            },
                            "name": {
                                "browser": {
                                    "chr": 10,
                                    "ie": 13,
                                    "fx": 4,
                                    "saf": 7,
                                    "op": 11.5
                                },
                                "concern": {},
                                "desc": "",
                                "note": ""
                            }
                        }
                    },
                    "p": {
                        "browser": {
                            "chr": true,
                            "ie": true,
                            "fx": true,
                            "saf": true,
                            "op": true
                        },
                        "attrs": {},
                        "param": {
                            "browser": {
                                "chr": true,
                                "ie": true,
                                "fx": true,
                                "saf": true,
                                "op": true
                            },
                            "attrs": {
                                "name": {
                                    "browser": {
                                        "chr": true,
                                        "ie": true,
                                        "fx": true,
                                        "saf": true,
                                        "op": true
                                    },
                                    "concern": {},
                                    "desc": "",
                                    "note": ""
                                },
                                "value": {
                                    "browser": {
                                        "chr": true,
                                        "ie": true,
                                        "fx": true,
                                        "saf": true,
                                        "op": true
                                    },
                                    "concern": {},
                                    "desc": "",
                                    "note": ""
                                }
                            }
                        },
                        "picture": {
                            "browser": {
                                "chr": 38,
                                "ie": 13,
                                "fx": 38,
                                "saf": 9.1,
                                "op": 25
                            },
                            "attrs": {}
                        }
                    },
                    "pre": {
                        "browser": {
                            "chr": true,
                            "ie": true,
                            "fx": true,
                            "saf": true,
                            "op": true
                        },
                        "attrs": {},
                        "progress": {
                            "browser": {
                                "chr": 8,
                                "ie": 10,
                                "fx": 16,
                                "saf": 6,
                                "op": 11
                            },
                            "attrs": {},
                            "max": {
                                "browser": {
                                    "chr": 8,
                                    "ie": 10,
                                    "fx": 16,
                                    "saf": 6,
                                    "op": 11
                                },
                                "concern": {},
                                "desc": "",
                                "note": ""
                            },
                            "value": {
                                "browser": {
                                    "chr": 8,
                                    "ie": 10,
                                    "fx": 16,
                                    "saf": 6,
                                    "op": 11
                                },
                                "concern": {},
                                "desc": "",
                                "note": ""
                            }
                        }
                    },
                    "q": {
                        "browser": {
                            "chr": true,
                            "ie": true,
                            "fx": true,
                            "saf": true,
                            "op": true
                        },
                        "attrs": {
                            "cite": {
                                "browser": {
                                    "chr": true,
                                    "ie": true,
                                    "fx": true,
                                    "saf": true,
                                    "op": true
                                },
                                "concern": {},
                                "desc": "",
                                "note": ""
                            }
                        }
                    },
                    "rp": {
                        "browser": {
                            "chr": 5,
                            "ie": 5.5,
                            "fx": 38,
                            "saf": 5,
                            "op": 15
                        },
                        "attrs": {}
                    }
                },
                "rt": {
                    "browser": {
                        "chr": 5,
                        "ie": 5.5,
                        "fx": 38,
                        "saf": 5,
                        "op": 15
                    },
                    "attrs": {}
                }
            },
            "ruby": {
                "browser": {
                    "chr": 5,
                    "ie": 5.5,
                    "fx": 38,
                    "saf": 5,
                    "op": 15
                },
                "attrs": {}
            }
        },
        "s": {
            "browser": {
                "chr": true,
                "ie": true,
                "fx": true,
                "saf": true,
                "op": true
            },
            "attrs": {},
            "samp": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "attrs": {},
                "script": {
                    "browser": {
                        "chr": true,
                        "ie": true,
                        "fx": true,
                        "saf": true,
                        "op": true
                    },
                    "attrs": {
                        "async": {
                            "browser": {
                                "chr": 8,
                                "ie": 10,
                                "fx": 3.6,
                                "saf": 5.1,
                                "op": 15
                            },
                            "concern": {},
                            "desc": "",
                            "note": ""
                        },
                        "crossorigin": {
                            "browser": {
                                "chr": 30,
                                "ie": 18,
                                "fx": 13,
                                "saf": 13,
                                "op": 12.1
                            },
                            "concern": {},
                            "desc": "",
                            "note": ""
                        },
                        "defer": {
                            "browser": {
                                "chr": 8,
                                "ie": 10,
                                "fx": 3.5,
                                "saf": 5,
                                "op": 15
                            },
                            "concern": {},
                            "desc": "",
                            "note": ""
                        },
                        "integrity": {
                            "browser": {
                                "chr": 45,
                                "ie": 17,
                                "fx": 43,
                                "saf": 13,
                                "op": 66
                            },
                            "concern": {},
                            "desc": "",
                            "note": ""
                        },
                        "nomodule": {
                            "browser": {
                                "chr": 61,
                                "ie": 16,
                                "fx": 60,
                                "saf": 11,
                                "op": 48
                            },
                            "concern": {},
                            "desc": "",
                            "note": ""
                        },
                        "referrerpolicy": {
                            "browser": {
                                "chr": 70,
                                "ie": 79,
                                "fx": 65,
                                "saf": false,
                                "op": true
                            },
                            "concern": {},
                            "desc": "",
                            "note": ""
                        },
                        "src": {
                            "browser": {
                                "chr": true,
                                "ie": true,
                                "fx": true,
                                "saf": true,
                                "op": true
                            },
                            "concern": {},
                            "desc": "",
                            "note": ""
                        },
                        "type": {
                            "browser": {
                                "chr": true,
                                "ie": true,
                                "fx": true,
                                "saf": true,
                                "op": true
                            },
                            "concern": {},
                            "desc": "",
                            "note": ""
                        }
                    }
                },
                "section": {
                    "browser": {
                        "chr": 5,
                        "ie": 9,
                        "fx": 4,
                        "saf": 5,
                        "op": 11.5
                    },
                    "attrs": {}
                }
            },
            "select": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "attrs": {
                    "autofocus": {
                        "browser": {
                            "chr": true,
                            "ie": 10,
                            "fx": false,
                            "saf": true,
                            "op": true
                        },
                        "concern": {},
                        "desc": "",
                        "note": ""
                    },
                    "disabled": {
                        "browser": {
                            "chr": true,
                            "ie": 9,
                            "fx": true,
                            "saf": true,
                            "op": true
                        },
                        "concern": {},
                        "desc": "",
                        "note": ""
                    },
                    "form": {
                        "browser": {
                            "chr": true,
                            "ie": true,
                            "fx": true,
                            "saf": true,
                            "op": true
                        },
                        "concern": {},
                        "desc": "",
                        "note": ""
                    },
                    "multiple": {
                        "browser": {
                            "chr": true,
                            "ie": true,
                            "fx": true,
                            "saf": true,
                            "op": true
                        },
                        "concern": {},
                        "desc": "",
                        "note": ""
                    },
                    "name": {
                        "browser": {
                            "chr": true,
                            "ie": true,
                            "fx": true,
                            "saf": true,
                            "op": true
                        },
                        "concern": {},
                        "desc": "",
                        "note": ""
                    },
                    "required": {
                        "browser": {
                            "chr": true,
                            "ie": 10,
                            "fx": 4,
                            "saf": true,
                            "op": true
                        },
                        "concern": {},
                        "desc": "",
                        "note": ""
                    },
                    "size": {
                        "browser": {
                            "chr": true,
                            "ie": true,
                            "fx": true,
                            "saf": true,
                            "op": true
                        },
                        "concern": {},
                        "desc": "",
                        "note": ""
                    }
                },
                "slot": {
                    "global": {
                        "browser": {
                            "chr": 53,
                            "ie": 79,
                            "fx": 63,
                            "saf": 10,
                            "op": 40
                        },
                        "concern": {},
                        "desc": "",
                        "note": ""
                    }
                }
            },
            "small": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "attrs": {}
            },
            "source": {
                "browser": {
                    "chr": 4,
                    "ie": 9,
                    "fx": 3.5,
                    "saf": 4,
                    "op": 10.5
                },
                "attrs": {},
                "media": {
                    "browser": {
                        "chr": 38,
                        "ie": 9,
                        "fx": 15,
                        "saf": 9.1,
                        "op": 25
                    },
                    "concern": {},
                    "desc": "",
                    "note": ""
                },
                "sizes": {
                    "browser": {
                        "chr": 38,
                        "ie": 13,
                        "fx": 3.8,
                        "saf": 9.1,
                        "op": 25
                    },
                    "concern": {},
                    "desc": "",
                    "note": ""
                },
                "src": {
                    "browser": {
                        "chr": 4,
                        "ie": 9,
                        "fx": 3.5,
                        "saf": 4,
                        "op": 10.5
                    },
                    "concern": {},
                    "desc": "",
                    "note": ""
                },
                "srcset": {
                    "browser": {
                        "chr": 38,
                        "ie": 13,
                        "fx": 38,
                        "saf": 9.1,
                        "op": 25
                    },
                    "concern": {},
                    "desc": "",
                    "note": ""
                },
                "type": {
                    "browser": {
                        "chr": 4,
                        "ie": 9,
                        "fx": 3.5,
                        "saf": 4,
                        "op": 10.5
                    },
                    "concern": {},
                    "desc": "",
                    "note": ""
                }
            }
        },
        "span": {
            "browser": {
                "chr": true,
                "ie": true,
                "fx": true,
                "saf": true,
                "op": true
            },
            "attrs": {}
        },
        "strong": {
            "browser": {
                "chr": true,
                "ie": true,
                "fx": true,
                "saf": true,
                "op": true
            },
            "attrs": {}
        },
        "style": {
            "browser": {
                "chr": true,
                "ie": true,
                "fx": true,
                "saf": true,
                "op": true
            },
            "attrs": {
                "media": {
                    "browser": {
                        "chr": true,
                        "ie": true,
                        "fx": true,
                        "saf": true,
                        "op": true
                    },
                    "concern": {},
                    "desc": "",
                    "note": ""
                },
                "type": {
                    "browser": {
                        "chr": true,
                        "ie": true,
                        "fx": true,
                        "saf": true,
                        "op": true
                    },
                    "concern": {},
                    "desc": "",
                    "note": ""
                }
            }
        },
        "sub": {
            "browser": {
                "chr": true,
                "ie": true,
                "fx": true,
                "saf": true,
                "op": true
            },
            "attrs": {}
        },
        "summary": {
            "browser": {
                "chr": 12,
                "ie": 79,
                "fx": 49,
                "saf": 6,
                "op": 15
            },
            "attrs": {}
        }
    },
    "th": {
        "browser": {
            "chr": true,
            "ie": true,
            "fx": true,
            "saf": true,
            "op": true
        },
        "attrs": {
            "abbr": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "concern": [],
                "desc": "",
                "note": ""
            },
            "colspan": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "concern": [
                    "td",
                    "th"
                ],
                "desc": "    Specifies the number of columns a table cell should span    ",
                "note": ""
            },
            "headers": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "concern": [
                    "td",
                    "th"
                ],
                "desc": "    Specifies one or more headers cells a cell is related to    ",
                "note": ""
            },
            "rowspan": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "concern": [
                    "td",
                    "th"
                ],
                "desc": "    Specifies the number of rows a table cell should span   ",
                "note": ""
            },
            "scope": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "concern": [
                    "th"
                ],
                "desc": "    Specifies whether a header cell is a header for a column, row, or group of columns or rows  ",
                "note": ""
            }
        },
        "desc": "Defines a header cell in a table",
        "type": "Tables"
    },
    "tr": {
        "browser": {
            "chr": true,
            "ie": true,
            "fx": true,
            "saf": true,
            "op": true
        },
        "attrs": {},
        "desc": "Defines a row in a table",
        "type": "Tables",
        "track": {
            "browser": {
                "chr": 23,
                "ie": 10,
                "fx": 31,
                "saf": 6,
                "op": 12.1
            },
            "attrs": {},
            "default": {
                "browser": {
                    "chr": 23,
                    "ie": 10,
                    "fx": 31,
                    "saf": 6,
                    "op": 12.1
                },
                "concern": {},
                "desc": "",
                "note": ""
            },
            "kind": {
                "browser": {
                    "chr": 23,
                    "ie": 10,
                    "fx": 31,
                    "saf": 6,
                    "op": 12.1
                },
                "concern": {},
                "desc": "",
                "note": ""
            },
            "label": {
                "browser": {
                    "chr": 23,
                    "ie": 10,
                    "fx": 31,
                    "saf": 6,
                    "op": 12.1
                },
                "concern": {},
                "desc": "",
                "note": ""
            },
            "src": {
                "browser": {
                    "chr": 23,
                    "ie": 10,
                    "fx": 31,
                    "saf": 6,
                    "op": 12.1
                },
                "concern": {},
                "desc": "",
                "note": ""
            },
            "srclang": {
                "browser": {
                    "chr": 23,
                    "ie": 10,
                    "fx": 31,
                    "saf": 6,
                    "op": 12.1
                },
                "concern": {},
                "desc": "",
                "note": ""
            }
        }
    },
    "td": {
        "browser": {
            "chr": true,
            "ie": true,
            "fx": true,
            "saf": true,
            "op": true
        },
        "attrs": {
            "colspan": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "concern": [
                    "td",
                    "th"
                ],
                "desc": "    Specifies the number of columns a table cell should span    ",
                "note": ""
            },
            "headers": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "concern": [
                    "td",
                    "th"
                ],
                "desc": "    Specifies one or more headers cells a cell is related to    ",
                "note": ""
            },
            "rowspan": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "concern": [
                    "td",
                    "th"
                ],
                "desc": "    Specifies the number of rows a table cell should span   ",
                "note": ""
            }
        },
        "desc": "Defines a cell in a table",
        "type": "Tables"
    },
    "thead": {
        "browser": {
            "chr": true,
            "ie": true,
            "fx": true,
            "saf": true,
            "op": true
        },
        "attrs": {},
        "desc": "Groups the header content in a table",
        "type": "Tables"
    },
    "tbody": {
        "browser": {
            "chr": true,
            "ie": true,
            "fx": true,
            "saf": true,
            "op": true
        },
        "attrs": {},
        "desc": "Groups the body content in a table",
        "type": "Tables"
    },
    "tfoot": {
        "browser": {
            "chr": true,
            "ie": true,
            "fx": true,
            "saf": true,
            "op": true
        },
        "attrs": {},
        "desc": "Groups the footer content in a table",
        "type": "Tables"
    },
    "col": {
        "browser": {},
        "attrs": {},
        "desc": " Specifies column properties for each column within a <colgroup> element",
        "type": "Tables"
    },
    "colgroup": {
        "browser": {},
        "attrs": {},
        "desc": "Specifies a group of one or more columns in a table for formatting",
        "type": "Tables"
    },
    "style": {
        "browser": {},
        "attrs": {},
        "desc": " Defines style information for a document",
        "type": "Styles and Semantics"
    },
    "div": {
        "browser": {},
        "attrs": {},
        "desc": " Defines a section in a document",
        "type": "Styles and Semantics"
    },
    "span": {
        "browser": {},
        "attrs": {},
        "desc": "Defines a section in a document",
        "type": "Styles and Semantics"
    },
    "header": {
        "browser": {},
        "attrs": {},
        "desc": "Defines a header for a document or section",
        "type": "Styles and Semantics"
    },
    "footer": {
        "browser": {},
        "attrs": {},
        "desc": "Defines a footer for a document or section",
        "type": "Styles and Semantics"
    },
    "main": {
        "browser": {},
        "attrs": {},
        "desc": "Specifies the main content of a document",
        "type": "Styles and Semantics"
    },
    "section": {
        "browser": {},
        "attrs": {},
        "desc": " Defines a section in a document",
        "type": "Styles and Semantics"
    },
    "article": {
        "browser": {
            "chr": 6,
            "ie": 9,
            "fx": 4,
            "saf": 5,
            "op": 11.1
        },
        "attrs": {},
        "desc": " Defines an article",
        "type": "Styles and Semantics"
    },
    "aside": {
        "browser": {
            "chr": 6,
            "ie": 9,
            "fx": 4,
            "saf": 5,
            "op": 11.1
        },
        "attrs": {},
        "desc": " Defines content aside from the page content",
        "type": "Styles and Semantics"
    },
    "details": {
        "browser": {},
        "attrs": {},
        "desc": " Defines additional details that the user can view or hide",
        "type": "Styles and Semantics"
    },
    "dialog": {
        "browser": {},
        "attrs": {},
        "desc": "Defines a dialog box or window",
        "type": "Styles and Semantics"
    },
    "summary": {
        "browser": {},
        "attrs": {},
        "desc": " Defines a visible heading for a <details> element",
        "type": "Styles and Semantics"
    },
    "data": {
        "browser": {},
        "attrs": {},
        "desc": "Adds a machine-readable translation of a given content",
        "type": "Styles and Semantics"
    },
    "meta": {
        "browser": {},
        "attrs": {},
        "desc": "Defines metadata about an HTML document",
        "type": "Meta Info"
    },
    "base": {
        "browser": {
            "chr": true,
            "ie": true,
            "fx": true,
            "saf": true,
            "op": true
        },
        "attrs": {
            "href": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "desc": "    Specifies the URL of the page the link goes to  ",
                "note": "",
                "concern": [
                    "a",
                    "area",
                    "base",
                    "link"
                ]
            },
            "target": {
                "browser": {
                    "chr": true,
                    "ie": true,
                    "fx": true,
                    "saf": true,
                    "op": true
                },
                "desc": "    Specifies the target for where to open the linked document or where to submit the form  ",
                "note": "",
                "concern": [
                    "a",
                    "area",
                    "base",
                    "form"
                ]
            }
        },
        "desc": "Specifies the base URL/target for all relative URLs in a document",
        "type": "Meta Info"
    },
    "basefont": {
        "browser": {},
        "attrs": {},
        "desc": "Specifies a default color, size, and font for all text in a document",
        "note": "Not supported in HTML5. Use CSS instead.",
        "type": "Meta Info"
    },
    "script": {
        "browser": {},
        "attrs": {},
        "desc": "Defines a client-side script",
        "type": "Programming"
    },
    "noscript": {
        "browser": {},
        "attrs": {},
        "desc": "Defines an alternate content for users that do not support client-side scripts",
        "type": "Programming"
    },
    "applet": {
        "browser": {},
        "attrs": {},
        "desc": "Defines an embedded applet",
        "note": "Not supported in HTML5. Use <embed> or <object> instead.",
        "type": "Programming"
    },
    "embed": {
        "browser": {},
        "attrs": {},
        "desc": " Defines a container for an external (non-HTML) application",
        "type": "Programming"
    },
    "object": {
        "browser": {},
        "attrs": {},
        "desc": "Defines an embedded object",
        "type": "Programming"
    },
    "param": {
        "browser": {},
        "attrs": {},
        "desc": " Defines a parameter for an object",
        "type": "Programming"
    }
};