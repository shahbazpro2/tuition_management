/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { Worker } from '@react-pdf-viewer/core';
import { ScrollMode } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { scrollModePlugin } from '@react-pdf-viewer/scroll-mode';

const ViewCourse = () => {
    const scrollModePluginInstance = scrollModePlugin();
    const { SwitchScrollMode } = scrollModePluginInstance;
    <SwitchScrollMode mode={ScrollMode.wrapped}>
        {(props) => (
            <button
                style={{
                    // Update the styles if the current mode is active
                    backgroundColor: props.isSelected ? '#357edd' : 'transparent',
                    borderColor: props.isSelected ? 'transparent' : '#357edd',
                    color: props.isSelected ? '#fff' : '#000',

                    borderRadius: '4px',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    cursor: 'pointer',
                    padding: '8px',
                }}
                onClick={props.onClick}
            >
                Horizontal scrolling
            </button>
        )}
    </SwitchScrollMode>;
    return <div className='my-7'>
        <div className="mb-14 text-xl text-center font-medium">Flash Card</div>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
            <Viewer plugins={[scrollModePluginInstance]} fileUrl={`${process.env.PUBLIC_URL}/assets/courses/flashcard.pdf`} />;
        </Worker>

    </div>
};

export default ViewCourse;
