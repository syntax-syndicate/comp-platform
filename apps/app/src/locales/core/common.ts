export const common = {
	notifications: {
		inbox: "Inbox",
		archive: "Archive",
		archive_all: "Archive all",
		no_notifications: "No new notifications",
	},
	actions: {
		save: "Save",
		edit: "Edit",
		delete: "Delete",
		remove: "Remove",
		cancel: "Cancel",
		clear: "Clear",
		create: "Create",
		createOrg: "Create Organization",
		addNew: "Add New",
		send: "Send",
		return: "Return",
		success: "Success",
		error: "Error",
		next: "Next",
		complete: "Complete",
		update: "Update",
		selectOrg: "Select Organization",
	},
	placeholders: {
		searchOrg: "Search organization...",
	},
	loading: "Loading...",
	employee: {
		status: {
			active: "Active",
			inactive: "Inactive",
		},
	},
	frequency: {
		daily: "Daily",
		weekly: "Weekly",
		monthly: "Monthly",
		quarterly: "Quarterly",
		yearly: "Yearly",
	},
	assignee: {
		label: "Assignee",
		placeholder: "Select assignee",
	},
	date: {
		pick: "Pick a date",
		due_date: "Due Date",
	},
	status: {
		open: "Open",
		pending: "Pending",
		closed: "Closed",
		archived: "Archived",
		not_started: "Not Started",
		in_progress: "In Progress",
		published: "Published",
		needs_review: "Needs Review",
		draft: "Draft",
		not_assessed: "Not Assessed",
		assessed: "Assessed",
		active: "Active",
		inactive: "Inactive",
		title: "Status",
		compliant: "Compliant",
		not_relevant: "Not Relevant",
		todo: "Todo",
		done: "Done",
	},
	filters: {
		clear: "Clear filters",
		search: "Search...",
		status: "Status",
		department: "Department",
		assignee: {
			label: "Assignee",
			placeholder: "Filter by assignee",
		},
	},
	table: {
		title: "Title",
		status: "Status",
		assigned_to: "Assigned To",
		due_date: "Due Date",
		last_updated: "Last Updated",
		no_results: "No results found",
	},
	empty_states: {
		no_results: {
			title: "No results found",
			title_tasks: "No tasks found",
			description: "Try another search, or adjusting the filters",
			description_filters: "Try another search, or adjusting the filters",
			description_no_tasks: "Create a task to get started",
		},
		no_items: {
			title: "No items found",
			description: "Try adjusting your search or filters",
		},
	},
	comments: {
		title: "Comments",
		description: "Add a comment using the form below.",
		add: "New Comment",
		new: "New Comment",
		save: "Save Comment",
		success: "Comment added successfully",
		error: "Failed to add comment",
		placeholder: "Write your comment here...",
		empty: {
			title: "No comments yet",
			description: "Be the first to add a comment",
		},
	},
	upload: {
		fileUpload: {
			uploadingText: "Uploading...",
			uploadingFile: "Uploading file...",
			dropFileHere: "Drop file here",
			dropFileHereAlt: "Drop file here",
			releaseToUpload: "Release to upload",
			addFiles: "Add Files",
			dragDropOrClick: "Drag and drop or click to browse",
			dragDropOrClickToSelect: "Drag and drop or click to select file",
			maxFileSize: "Max file size: {size}MB",
		},
		fileUrl: {},
		fileCard: {
			preview: "Preview",
			filePreview: "File Preview: {fileName}",
			previewNotAvailable: "Preview not available for this file type",
			openFile: "Open File",
			deleteFile: "Delete File",
			deleteFileConfirmTitle: "Delete File",
			deleteFileConfirmDescription:
				"This action cannot be undone. The file will be permanently deleted.",
		},
		fileSection: {
			filesUploaded: "{count} files uploaded",
		},
	},
	attachments: {
		title: "Attachments",
		description: "Add a file by clicking 'Add Attachment'.",
		upload: "Upload attachment",
		drop: "Drop the files here",
		drop_description:
			"Drop files here or click to choose files from your device.",
		drop_files_description: "Files can be up to ",
		empty: {
			title: "No attachments",
			description: "Add a file by clicking 'Add Attachment'.",
		},
		toasts: {
			error: "Something went wrong, please try again.",
			error_uploading_files: "Cannot upload more than 1 file at a time",
			error_uploading_files_multiple:
				"Cannot upload more files than the maximum allowed",
			error_no_files_selected: "No files selected",
			error_file_rejected: "File {file} was rejected",
			error_failed_to_upload_files: "Failed to upload files",
			success_uploading_files: "Files uploaded successfully",
			success_uploading_files_target: "Files uploaded",
			uploading_files: "Uploading {target}...",
			remove_file: "Remove file",
		},
	},
	edit: "Edit",
	description: "Description",
	last_updated: "Last Updated",
	save: "Save",
	success: "Success",
	error: "Error",
	unexpected_error: "An unexpected error occurred",
	tasks: "tasks",
	exit: "Exit",
} as const;
