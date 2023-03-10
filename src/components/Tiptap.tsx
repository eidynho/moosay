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

    return (
        <div className="flex items-center gap-3">
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={`transition-all p-2 rounded hover:text-d-primary hover:bg-gray-300 hover:bg-opacity-80 ${
                    editor.isActive("bold")
                        ? "text-d-primary bg-gray-300 bg-opacity-80"
                        : "text-l-primary"
                }`}
            >
                <TextBolder size={24} weight="bold" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={`transition-all p-2 rounded hover:text-d-primary hover:bg-gray-300 hover:bg-opacity-80 ${
                    editor.isActive("italic")
                        ? "text-d-primary bg-gray-300 bg-opacity-80"
                        : "text-l-primary"
                }`}
            >
                <TextItalic size={24} weight="bold" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                className={`transition-all p-2 rounded hover:text-d-primary hover:bg-gray-300 hover:bg-opacity-80 ${
                    editor.isActive("strike")
                        ? "text-d-primary bg-gray-300 bg-opacity-80"
                        : "text-l-primary"
                }`}
            >
                <TextStrikethrough size={24} weight="bold" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={!editor.can().chain().focus().toggleCode().run()}
                className={`transition-all p-2 rounded hover:text-d-primary hover:bg-gray-300 hover:bg-opacity-80 ${
                    editor.isActive("code")
                        ? "text-d-primary bg-gray-300 bg-opacity-80"
                        : "text-l-primary"
                }`}
            >
                <Code size={24} weight="bold" />
            </button>
            <button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                className={
                    editor.isActive("heading", { level: 1 })
                        ? "text-d-primary bg-gray-300 bg-opacity-80"
                        : "text-l-primary"
                }
            >
                <TextHOne size={24} weight="bold" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`transition-all p-2 rounded hover:text-d-primary hover:bg-gray-300 hover:bg-opacity-80 ${
                    editor.isActive("orderedList")
                        ? "text-d-primary bg-gray-300 bg-opacity-80"
                        : "text-l-primary"
                }`}
            >
                <ListNumbers size={24} weight="bold" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`transition-all p-2 rounded hover:text-d-primary hover:bg-gray-300 hover:bg-opacity-80 ${
                    editor.isActive("bulletList")
                        ? "text-d-primary bg-gray-300 bg-opacity-80"
                        : "text-l-primary"
                }`}
            >
                <ListDashes size={24} weight="bold" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={`transition-all p-2 rounded hover:text-d-primary hover:bg-gray-300 hover:bg-opacity-80 ${
                    editor.isActive("blockquote")
                        ? "text-d-primary bg-gray-300 bg-opacity-80"
                        : "text-l-primary"
                }`}
            >
                <Quotes size={24} weight="bold" />
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
                class: "font-mono h-40 overflow-auto w-96",
            },
        },
        onUpdate({ editor }) {
            if (!editor) return;

            updateContent(editor.getHTML());
        },
    });

    return (
        <section className="flex flex-col border rounded-lg py-4 px-5">
            <EditorContent editor={editor} />
            <div className="w-full h-[1px] border-t border-[#999] mb-4 mt-3"></div>
            <MenuBar editor={editor} />
        </section>
    );
}
