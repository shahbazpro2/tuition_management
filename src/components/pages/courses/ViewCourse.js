/* eslint-disable no-undef */
import * as React from 'react';
import { Icon, MinimalButton, Plugin, RenderViewer, Position, SpecialZoomLevel, Tooltip, Viewer, Worker } from '@react-pdf-viewer/core';
import { pageNavigationPlugin, RenderGoToPageProps } from '@react-pdf-viewer/page-navigation';
import { RenderCurrentScaleProps, RenderZoomInProps, RenderZoomOutProps, zoomPlugin } from '@react-pdf-viewer/zoom';

// Import styles
import '@react-pdf-viewer/zoom/lib/styles/index.css';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';

const disableScrollPlugin = () => {
    const renderViewer = (props) => {
        const { slot } = props;

        if (slot.subSlot && slot.subSlot.attrs && slot.subSlot.attrs.style) {
            slot.subSlot.attrs.style = Object.assign({}, slot.subSlot.attrs.style, {
                // Disable scrolling in the pages container
                overflow: 'hidden',
            });
        }

        return slot;
    };

    return {
        renderViewer,
    };
};

const ViewCourse = () => {
    const disableScrollPluginInstance = disableScrollPlugin();
    const pageNavigationPluginInstance = pageNavigationPlugin();
    const zoomPluginInstance = zoomPlugin();
    const { CurrentScale, ZoomIn, ZoomOut } = zoomPluginInstance;

    const { GoToNextPage, GoToPreviousPage } = pageNavigationPluginInstance;

    return (
        <div
            className="rpv-core__viewer my-10"
            style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                height: '100%',
                position: 'relative',
            }}
        >
            {/*  <div
                style={{
                    alignItems: 'center',
                    backgroundColor: '#eeeeee',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '4px',
                }}
            >
                <div style={{ padding: '0px 2px' }}>
                    <ZoomOut>
                        {(props) => (
                            <button
                                style={{
                                    backgroundColor: '#357edd',
                                    border: 'none',
                                    borderRadius: '4px',
                                    color: '#ffffff',
                                    cursor: 'pointer',
                                    padding: '8px',
                                }}
                                onClick={props.onClick}
                            >
                                Zoom out
                            </button>
                        )}
                    </ZoomOut>
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <CurrentScale>
                        {(props) => <>{`${Math.round(props.scale * 100)}%`}</>}
                    </CurrentScale>
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <ZoomIn>
                        {(props) => (
                            <button
                                style={{
                                    backgroundColor: '#357edd',
                                    border: 'none',
                                    borderRadius: '4px',
                                    color: '#ffffff',
                                    cursor: 'pointer',
                                    padding: '8px',
                                }}
                                onClick={props.onClick}
                            >
                                Zoom in
                            </button>
                        )}
                    </ZoomIn>
                </div>
            </div> */}
            <div
                style={{
                    left: 0,
                    position: 'absolute',
                    top: '50%',
                    transform: 'translate(24px, -50%)',
                    zIndex: 1,
                }}
            >
                <GoToPreviousPage>
                    {(props) => (
                        <Tooltip
                            position={Position.BottomCenter}
                            target={
                                <MinimalButton onClick={props.onClick}>
                                    <Icon size={16}>
                                        <path d="M18.4.5,5.825,11.626a.5.5,0,0,0,0,.748L18.4,23.5" />
                                    </Icon>
                                </MinimalButton>
                            }
                            content={() => 'Previous page'}
                            offset={{ left: 0, top: 8 }}
                        />
                    )}
                </GoToPreviousPage>
            </div>

            <div
                style={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translate(-24px, -50%)',
                    zIndex: 1,
                }}
            >
                <GoToNextPage>
                    {(props) => (
                        <Tooltip
                            position={Position.BottomCenter}
                            target={
                                <MinimalButton onClick={props.onClick}>
                                    <Icon size={16}>
                                        <path d="M5.651,23.5,18.227,12.374a.5.5,0,0,0,0-.748L5.651.5" />
                                    </Icon>
                                </MinimalButton>
                            }
                            content={() => 'Next page'}
                            offset={{ left: 0, top: 8 }}
                        />
                    )}
                </GoToNextPage>
            </div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
                <div
                    className="h-[80vh] overflow-auto"
                >
                    <Viewer plugins={[
                        disableScrollPluginInstance, pageNavigationPluginInstance, zoomPluginInstance
                    ]} defaultScale={SpecialZoomLevel.PageFit} fileUrl={`${process.env.PUBLIC_URL}/assets/courses/hano.pdf`} />
                </div>
            </Worker>

        </div>
    );
};


export default ViewCourse;
