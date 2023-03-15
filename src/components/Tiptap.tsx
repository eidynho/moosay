import { EditorContent, EditorContentProps, useEditor } from "@tiptap/react";
import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";
import {
    Code,
    ListDashes,
    ListNumbers,
    Quotes,
    TextBolder,
    TextHOne,
    TextItalic,
    TextStrikethrough,
} from "phosphor-react";

interface TiptapProps {
    placeholder?: string;
    updateContent: (value: string) => void;
}

const MenuBar = ({ editor }: EditorContentProps) => {
    if (!editor) {
        return null;
    }

    const baseButtonClass =
        "transition-all p-2 rounded hover:text-d-primary hover:bg-gray-300 hover:bg-opacity-80";
    const baseButtonActiveClass = "text-d-primary bg-gray-300 bg-opacity-80";
    const baseButtonNotActiveClass = "text-l-primary";

    const baseIconButtonClass = "w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6";

    return (
        <div className="flex items-center gap-1 sm:gap-2">
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={`${baseButtonClass} ${
                    editor.isActive("bold")
                        ? baseButtonActiveClass
                        : baseButtonNotActiveClass
                }`}
            >
                <TextBolder className={baseIconButtonClass} weight="bold" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={`${baseButtonClass} ${
                    editor.isActive("italic")
                        ? baseButtonActiveClass
                        : baseButtonNotActiveClass
                }`}
            >
                <TextItalic className={baseIconButtonClass} weight="bold" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                className={`${baseButtonClass} ${
                    editor.isActive("strike")
                        ? baseButtonActiveClass
                        : baseButtonNotActiveClass
                }`}
            >
                <TextStrikethrough
                    className={baseIconButtonClass}
                    weight="bold"
                />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={!editor.can().chain().focus().toggleCode().run()}
                className={`${baseButtonClass} ${
                    editor.isActive("code")
                        ? baseButtonActiveClass
                        : baseButtonNotActiveClass
                }`}
            >
                <Code className={baseIconButtonClass} weight="bold" />
            </button>
            <button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                className={`${baseButtonClass}
                    ${
                        editor.isActive("heading", { level: 1 })
                            ? baseButtonActiveClass
                            : baseButtonNotActiveClass
                    }`}
            >
                <TextHOne className={baseIconButtonClass} weight="bold" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`${baseButtonClass} ${
                    editor.isActive("orderedList")
                        ? baseButtonActiveClass
                        : baseButtonNotActiveClass
                }`}
            >
                <ListNumbers className={baseIconButtonClass} weight="bold" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`${baseButtonClass} ${
                    editor.isActive("bulletList")
                        ? baseButtonActiveClass
                        : baseButtonNotActiveClass
                }`}
            >
                <ListDashes className={baseIconButtonClass} weight="bold" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={`${baseButtonClass} ${
                    editor.isActive("blockquote")
                        ? baseButtonActiveClass
                        : baseButtonNotActiveClass
                }`}
            >
                <Quotes className={baseIconButtonClass} weight="bold" />
            </button>
        </div>
    );
};

export function Tiptap({ placeholder, updateContent }: TiptapProps) {
    const editor = useEditor({
        content: ``,
        extensions: [
            StarterKit.configure({
                bulletList: {
                    keepMarks: true,
                },
                orderedList: {
                    keepMarks: true,
                },
            }),
            Placeholder.configure({
                placeholder,
            }),
        ],
        editorProps: {
            attributes: {
                class: "font-mono h-40 overflow-auto text-sm lg:text-base max-w-full w-full lg:w-[30rem] xl:w-[46rem]",
            },
        },
        onUpdate({ editor }) {
            if (!editor) return;

            updateContent(editor.getHTML());
        },
    });

    return (
        <section className="flex flex-col border rounded-lg mx-2 py-4 px-5 max-w-[24rem] lg:max-w-[30rem] xl:max-w-[46rem]">
            <EditorContent editor={editor} />
            <div className="w-full h-[1px] border-t border-[#999] mb-3 mt-2 lg:mb-4 lg:mt-3"></div>
            <MenuBar editor={editor} />
        </section>
    );
}
